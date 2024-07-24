import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar"
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Login from './pages/Login'
import Contact from './pages/Contact'
import AllProducts from './pages/AllProducts'
import About from './pages/About'
import SignUp from './pages/SignUp'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FireBaseAuth/fireBaseAuth'
import SingleProductPage from './pages/SingleProductPage'

const App = () => {
  const [userName,setUserName] =useState("");
  //username display
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserName(user.displayName)
      }
    })
  },[])
  return (
    <div >
        <div className='h-[10vh]'>
          <NavBar userName={userName}/>
        </div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/allproducts" element={<AllProducts />}/>
          <Route path="/singleProduct/:id" element={<SingleProductPage />}/>
        </Routes>

        <div>
          <Footer />
        </div>
    </div>
  )
}

export default App

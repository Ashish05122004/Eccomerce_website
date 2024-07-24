import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../redux/slice/LoginSlice';
import toast from 'react-hot-toast';
import { auth } from '../FireBaseAuth/fireBaseAuth';
import { signOut } from 'firebase/auth';

const NavBar = ({ userName }) => {
  const { cart } = useSelector((state) => state)
  const login = useSelector((state) => {
    return state.login;
  });
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [nav_animation, setNav_animation] = useState("translate-x-[100%]");
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setNav_animation(isOpen ? "translate-x-[100%]" : "translate-x-[0%]");
  }

  const handleLogout = () => {
    //linking to firebase
    signOut(auth).then(() => toast.success("Logged Out Successfully."))
      .catch((error) => toast.error(error.message));
    dispatch(toggleLogin());
  }
  return (
    <header className='w-full h-[10vh] border-b-2 border-gray-300 bg-white shadow-md fixed top-0 z-10 flex justify-center' >

      <nav className='flex justify-between items-center text-lg font-semibold mx-auto md:w-10/12 w-full p-1'>
        <Link to="/">
          <img src="https://i.ibb.co/tLgtZ6y/logo.png" alt='logo' className='sm:w-[10rem] w-[6rem] sm:h-[3rem] h-[2rem]' />
        </Link>

        <ul className='gap-5 justify-center hidden lg:flex w-[50vw]'>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/allproducts">
            <li>All Products</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>

        {/* Responsive nav */}
        <ul className={`backBlur ${nav_animation} transition-all duration-300 flex lg:hidden flex-col gap-10 items-center absolute w-full h-screen top-[10vh] left-0 text-[1.6rem]`}
        >
          <div className='w-full flex justify-end'>
            <button
              onClick={toggleOpen}
              className={`mr-3 ${isOpen?"spin":""}`}>
              <HiMiniXMark fontSize={30} />
            </button>
          </div>
          <Link to="/" onClick={toggleOpen}>
            <li>Home</li>
          </Link>
          <Link to="/allproducts" onClick={toggleOpen}>
            <li>All Products</li>
          </Link>
          <Link to="/about" onClick={toggleOpen}>
            <li>About</li>
          </Link>
          <Link to="/contact" onClick={toggleOpen}>
            <li>Contact</li>
          </Link>
        </ul>

        <div className='flex gap-4 items-center justify-end h-[10vh] lg:w-[15vw] w-[60%]'>
          {
            login ?
              (
                <div className='h-[8vh] flex flex-col items-center justify-center'>
                  <p className='text-sm'>{userName}</p>
                  <button className='bg-gray-300 w-[5rem] py-1 rounded-md'
                    onClick={handleLogout}
                  >
                    <Link to="/">
                      Log Out
                    </Link>
                  </button>
                </div>
              ) :
              (
                <button className='bg-gray-300 w-[5rem] py-1 rounded-md'>
                  <Link to="/login">
                    Login
                  </Link>
                </button>
              )
          }

          <div className='flex flex-col justify-center relative h-[6vh] w-[2rem]'>
            <Link to="/cart">
              <p className={`h-5 ${login ? "flex" : "hidden"} items-center bg-blue-400 rounded-full p-1 font-bold absolute top-1 right-0`}>
                {cart.length}</p>
              <FaShoppingCart fontSize={25} />
            </Link>
          </div>

          {/* for responsive navbar */}
          {
            isOpen ? "" :
              (
                <button className='lg:hidden'
                  onClick={toggleOpen}
                >
                  <FaBars fontSize={25} />
                </button>
              )
          }
        </div>
      </nav>
    </header>
  )
}

export default NavBar

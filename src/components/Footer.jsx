import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-full py-[3rem] w-full bg-gray-900 text-white flex items-center justify-center'>

      <div className='mx-auto max-w-[1180px]  flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-[2rem] lg:gap-[5rem] '>
        <Link to="/">
          <img src="https://i.ibb.co/tLgtZ6y/logo.png" alt='logo' className='w-[10rem] h-[3rem]' />
        </Link>
          <div className='w-full md:w-[10rem] flex flex-col items-center lg:items-start'>
            <h1 className='font-semibold text-md mb-3'>MENU</h1>
            <p>Features</p>
            <p>Info Center</p>
            <p>New Blogs</p>
            <p>Login</p>
          </div>
          <div className='w-full md:w-[10rem] flex flex-col items-center lg:items-start'>
            <h1 className='font-semibold text-md mb-3'>COMPANY</h1>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Term & Condition</p>
            <p>Login</p>
          </div>
          <div className='w-full md:w-[10rem] flex flex-col items-center lg:items-start'>
            <h1 className='font-semibold text-md mb-3'>CONTACT</h1>
            <p>Contact Sales</p>
            <p>+123445678</p>
            <p>New Blogs</p>
            <p>+123445678</p>
          </div>
          <div className='w-full md:w-[10rem] flex flex-col items-center lg:items-start'>
          <h1 className='font-semibold text-md mb-3'>TECH SUPPORT</h1>
          <p>Contact Support</p>
          <p>Info Center</p>
          <p>Active</p> 
        </div>
        </div>
    
    </div>
  )
}

export default Footer

import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdLocalShipping,MdOutlinePayment} from "react-icons/md";

const ServiceSection = () => {
  return (
    <div className='flex flex-wrap gap-6 mx-auto max-w-[1180px] lg:justify-between justify-center py-[4rem] items-center'>
      <div className='bg-red-500 w-[14rem] h-[5rem] flex flex-col justify-center items-center rounded cursor-pointer text-white hover:scale-110 transition-all duration-300'>
        <FaShippingFast />
        <h2>FREE SHIPPING</h2>
      </div>
      <div className='bg-red-500 w-[14rem] h-[5rem] flex flex-col justify-center items-center rounded cursor-pointer text-white hover:scale-110 transition-all duration-300 '>
        <FaCartArrowDown />
        <h2>AUTHENTIC PRODUCTS</h2>
      </div>
      <div className='bg-red-500 w-[14rem] h-[5rem] flex flex-col justify-center items-center rounded cursor-pointer text-white hover:scale-110 transition-all duration-300 '>
        <MdLocalShipping />
        <h2>EASY RETURN</h2>
      </div>
      <div className='bg-red-500 w-[14rem] h-[5rem] flex flex-col justify-center items-center rounded cursor-pointer text-white hover:scale-110 transition-all duration-300 '>
        <MdOutlinePayment />
        <h2>SECURE PAYMENT</h2>
      </div>
    </div>
  )
}

export default ServiceSection

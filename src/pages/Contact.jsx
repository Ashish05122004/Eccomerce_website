import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../FireBaseAuth/fireBaseAuth';
import toast from 'react-hot-toast';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formData.name && !formData.email && !formData.message) {
      toast.error("All fields are required.");
      return;
    }
    else {
      //link with firebase
      addDoc(collection(db, "contactUser"), {
        user: formData.name,
        email: formData.email,
        msg: formData.message
      }).then(() => {
        toast.success(`Thank You!! ${formData.name}`);
        setFormData({ name: "", email: "", message: "" });
      })
        .catch((err) => {
          toast.error(err.message);
        })
    }
  }
  return (
    <div className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center mb-6">Contact Us</h1>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2 ">
            <form onSubmit={submitHandler} className='w-full flex flex-wrap'>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name"
                    onChange={changeHandler}
                    value={formData.name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message"
                    onChange={changeHandler}
                    value={formData.message}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit</button>
              </div>
            </form>
            <div className="p-2 w-full pt-6 mt-3 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a className="text-gray-500">
                  <FaFacebookF fontSize={25} />
                </a>
                <a className="ml-4 text-gray-500">
                  <FaTwitter fontSize={25} />
                </a>
                <a className="ml-4 text-gray-500">
                  <FaInstagram fontSize={25} />
                </a>
                <a className="ml-4 text-gray-500">
                  <BiSolidMessageRounded fontSize={25} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

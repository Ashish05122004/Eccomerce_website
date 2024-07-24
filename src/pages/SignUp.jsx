import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye , FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { auth } from '../FireBaseAuth/fireBaseAuth';

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
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
        if (formData.password === formData.confirmPassword) {
            //link with firebase
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then(async (res) => {
                    const user = res.user;
                    await updateProfile(user, {
                        displayName: `${formData.firstName} ${formData.lastName}`
                    })
                })
                .catch((err) => toast.error(err.message));
            navigate('/login');
        }
        else {
            toast.error("Password do not match");
            return;
        }
    }

    return (
        <div className=' min-h-screen flex items-center justify-center backImg'>
            <div className='lg:w-[40%] sm:w-[70%] w-[98%] h-[70%] p-8 border-[1px] border-gray-500 flex flex-col justify-center items-center rounded-md'>

                <h1 className='text-white mb-3 text-2xl font-bold align-center'>CREATE ACCOUNT</h1>

                <form onSubmit={submitHandler} className='text-white sm:text-[1rem] text-[0.8rem]'>
                    {/* name */}
                    <div className='flex gap-x-4 w-full'>
                        <label className='w-full'>
                            <p>First Name <sup className=' text-blue-600'>*</sup></p>
                            <input
                                required
                                type="text"
                                name='firstName'
                                placeholder='Enter your first name'
                                onChange={changeHandler}
                                value={FormData.firstName}
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </label>
                        <label className='w-full'>
                            <p>Last Name <sup className=' text-blue-600'>*</sup></p>
                            <input
                                required
                                type="text"
                                name='lastName'
                                placeholder='Enter your last name'
                                onChange={changeHandler}
                                value={FormData.lastName}
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </label>
                    </div>
                    {/* email */}
                    <label>
                        <p>Email address <sup className=' text-blue-600'>*</sup></p>
                        <input
                            required
                            type="email"
                            name='email'
                            placeholder='Enter email address'
                            onChange={changeHandler}
                            value={FormData.email}
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </label>
                    {/* password */}
                    <div className='flex gap-x-4 mt-3 w-full'>
                        <label className='w-full relative'>
                            <p>
                                Create Password<sup className=' text-blue-600'>*</sup>
                            </p>
                            <input
                                required
                                type={showPassword ? ("text") : ("password")}
                                onChange={changeHandler}
                                name='password'
                                value={formData.password}
                                placeholder='Enter Password'
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />

                            <span
                                onClick={() => {
                                    setShowPassword((prev) => !prev);
                                }
                                }
                                className='absolute right-1 bottom-[.7rem] text-gray-600 sm:text-[1.5rem] text-[1rem]'>
                                {showPassword ? (<FaEyeSlash   />) : (<FaEye  />)}
                            </span>
                        </label>
                        <label className='w-full relative'>
                            <p>
                                Confirm Password<sup className=' text-blue-600'>*</sup>
                            </p>
                            <input
                                required
                                type={showPassword1 ? ("text") : ("password")}
                                onChange={changeHandler}
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                placeholder='Confirm Password'
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />

                            <span onClick={() => {
                                setShowPassword1((prev) => !prev);
                            }
                            }
                                className='absolute right-1 bottom-[.7rem] text-gray-600 sm:text-[1.5rem] text-[1rem]'>
                                {showPassword1 ? (<FaEyeSlash   />) : (<FaEye  />)}
                            </span>
                        </label>
                    </div>
                    <button className='w-full bg-yellow-400 text-black font-semibold py-2 outline-none rounded-md mt-[1.5rem]'
                    >Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm

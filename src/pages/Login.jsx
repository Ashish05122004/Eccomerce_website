import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toggleLogin } from '../redux/slice/LoginSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBaseAuth/fireBaseAuth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,[name]: value
      }
    })
  }
  const submitHandler = (event) => {
    event.preventDefault();
    //link with firebase
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((res) => {
      toast.success("Log in");
      navigate("/");
      dispatch(toggleLogin());
    })
    .catch((err) => toast.error("Please "));
  }
  return (
    <div className='h-[90vh] flex items-center justify-center backImg'>
      <div className='lg:w-[40%] sm:w-[70%] w-[95%] h-[70%] border-[1px] border-gray-500 flex flex-col justify-center items-center rounded-md backBlur'>
        <div className=' flex justify-start w-[70%] '>
          <h1 className='text-white mb-3 text-2xl font-bold'>LOG IN</h1>
        </div>
        <form onSubmit={submitHandler} className=' lg:w-[70%] w-[90%] text-white'>
          <label>
            <p className=' mb-2'>
              Email Address <sup className=' text-blue-600'>*</sup>
            </p>
            <input
              required
              type="email"
              onChange={changeHandler}
              name='email'
              value={formData.email}
              placeholder='Enter email address'
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
          <label className='relative'>
            <p className=' mb-2'>
              Password <sup className=' text-blue-600'>*</sup>
            </p>
            <input
              required
              type={
                showPassword ? ("text") : ("password")
              }
              onChange={changeHandler}
              name='password'
              value={formData.password}
              placeholder='Enter Password'
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <span onClick={() => {
              setShowPassword((prev) => !prev);
            }}
              className='absolute right-2 top-[4.5rem] text-gray-600'
            >
              {showPassword ? (<FaEyeSlash fontSize={25} />) : (<FaEye fontSize={25} />)}
            </span>

            <Link to="#">
              <p className=' text-blue-400 max-w-max ml-auto ' >Forgot Password</p>
            </Link>

          </label>
          <button className='w-full bg-yellow-400 text-black font-semibold py-2 rounded-md mt-[3rem] mb-[1rem]'>
            Sign in
          </button>
        </form>
        <div className='text-white'>
          <p>Not Registered yet? 
            <Link to="/signup">
              <span className='text-blue-400'>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

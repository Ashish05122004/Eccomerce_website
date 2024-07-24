import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { add } from '../redux/slice/CartSlice';

const SingleProductPage = () => {
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        const fetchSingleProduct = async () => {
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
            setProductDetails(res.data);
            console.log(res.data)
        }
        fetchSingleProduct();
    }, [id]);

    const login = useSelector((state) => {
        return state.login
    })
    const addToCart = (product) => {
        if (login) {
            dispatch(add({ ...product, quantity: 1 }));
            toast.success("Item added to cart");
        } else {
            toast.error("Login to add products")
        }
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden md:h-[80vh] h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
                    <img alt="ecommerce" className="lg:w-1/3 w-[1/2] lg:h-auto h-64 object-cover object-center rounded" src={productDetails.thumbnail} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{productDetails.brand}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center text-blue-500">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStarOutline />
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 gap-1 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <FaFacebookF fontSize={25} />
                                </a>
                                <a className="text-gray-500">
                                    <FaTwitter fontSize={25} />
                                </a>
                                <a className="text-gray-500">
                                    <BiSolidMessageRounded fontSize={25} />
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{productDetails.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <p
                                className={`${productDetails.availabilityStatus === "In Stock" ? " text-green-600" : "text-red-600"} font-bold`}
                            >{productDetails.availabilityStatus}</p>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${productDetails.price}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                onClick={()=>addToCart(productDetails)}
                            >Add to Cart</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                                onClick={() => { 
                                    
                                    setLiked(!liked);
                                    liked?toast.success("Like removed"):toast.success("Liked");
                                 }}
                            >
                                {
                                    liked ? <FcLike fontSize={25} /> : <FcLikePlaceholder fontSize={25}/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProductPage

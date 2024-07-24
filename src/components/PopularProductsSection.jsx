import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/slice/CartSlice';
import { Link } from 'react-router-dom';
import AllProductShim from './AllProductShim';

const PopularProductsSection = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPopularProducts = async () => {
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/carts/1`);
            setPopularProducts(res.data.products);
        }
        fetchPopularProducts();
    }, []);
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
        <div className='mx-auto md:w-11/12 w-9/12 flex flex-col items-center mt-4'>
            <span className='text-3xl font-bold border-b-4 border-b-[red] text-center'>Popular Products</span>
            <section className="text-gray-600 body-font w-full">
                <div className=" py-10">
                    {
                        !popularProducts.length ? (<AllProductShim size={4} />) :
                            (<div className="flex flex-wrap -m-4 justify-center gap-10">
                                {
                                    popularProducts.map((product) => (
                                        <div key={product.id} className="lg:w-1/5 md:w-1/2 w-full p-4 bg-gray-100 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                                            <Link to={`/singleProduct/${product.id}`} className="flex justify-center relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-[14rem] h-[14rem] block"
                                                    src={product.thumbnail} />
                                            </Link>
                                            <div className="mt-4">
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font">{`Rating:${product.rating}`}</h3>
                                                <div className='flex justify-between w-full'>
                                                    <p className="mt-1">{`Price: $${product.price}`}</p>
                                                    <button
                                                        className=' bg-blue-600 text-white px-3 py-1 rounded-md'
                                                        onClick={() => addToCart(product)}
                                                    >Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>)
                    }

                </div>
            </section>
        </div>
    )
}

export default PopularProductsSection

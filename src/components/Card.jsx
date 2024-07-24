import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/slice/CartSlice';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => {
    return state.login
  })
  const addToCart = () => {
    if (login) {
      dispatch(add({ ...product, quantity: 1 }));
      toast.success("Item added to cart");
    } else {
      toast.error("Login to add products")
    }
  }
  return (
    <div className="lg:w-1/5 md:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <Link to={`/singleProduct/${product.id}`} className="flex justify-center relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-[14rem] h-[14rem] block"
          src={product.thumbnail} />
      </Link>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
        <h3 className="text-blue-600 bg-blue-200 max-w-fit text-xs tracking-widest title-font">{`Rating:${product.rating}`}</h3>
        <div className='flex justify-between w-full'>
          <p className="mt-1">{`Price: $${product.price}`}</p>
          <button
            className=' bg-blue-600 text-white px-3 py-1 rounded-md'
            onClick={addToCart}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add, decQuantity, remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed");
    }
    const incrementHandler = () => {
        dispatch(add(item));
    }
    const decrementHandler = () => {
        item.quantity > 1?
        dispatch(decQuantity(item.id))
        :"";
    }
    return (
        <div className="flex justify-between items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-1/2 mr-3">
                <div className="md:w-20 w-28 flex items-center">
                    <img className="h-[5rem] w-[5rem] object-fill"
                        src={item.thumbnail}
                        alt="itmes" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="text-red-500 text-xs">{item.brand}</span>
                    <button className='text-red-500 bg-red-200 w-8 h-8 rounded-full flex justify-center items-center'
                        onClick={removeFromCart}
                    >
                        <MdDeleteForever fontSize={17} />
                    </button>
                </div>
            </div>
            <div className='flex justify-between w-1/2'>
                <div className="flex justify-center w-2/5 mr-2">
                    <button
                        onClick={incrementHandler}
                    >+</button>

                    <p className="mx-2 border text-center w-8">{item.quantity}</p>

                    <button
                    onClick={decrementHandler}
                    >-</button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">{`${item.price}$`}</span>
                <span className="text-center w-1/5 font-semibold text-sm">{`${(item.price * item.quantity).toFixed(2)}$`}</span>
            </div>
        </div>
    )
}

export default CartItem

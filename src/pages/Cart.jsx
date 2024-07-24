import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import ModalSection from '../components/ModalSection';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [promo, setPromo] = useState("");
  useEffect(() => {
    setTotalAmount(
      cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    );
  }, [cart]);
  const promoHandler = () => {
    if (promo === "ashish") {
      setTotalAmount(totalAmount - 5);
      toast.success("Promo code is added.", {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } else {
      toast.error("Promo code is not valid");
    }

  }
  return (
    <div className="md:w-10/12 w-full mx-auto mt-10">
      {
        cart.length > 0 ?
          (
            <div className="flex lg:flex-row flex-col items-center shadow-md my-10">
              <div className="lg:w-3/4 w-full bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">{`${cart.length} Items`}</h2>
                </div>
                <div className="flex mt-10 mb-5 justify-between w-full">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                  <div className="flex justify-between w-1/2">
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5 ">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                  </div>
                </div>
                {
                  cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))
                }

                <Link to="/allproducts" className="flex font-semibold text-indigo-600 text-sm mt-10">
                  <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                  Continue Shopping
                </Link>
              </div>
              <div id="summary" className="lg:w-1/4 w-full px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
                  <span className="font-semibold text-sm">{`${totalAmount.toFixed(2)}$`}</span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                  <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                  </select>
                </div>
                <div className="py-10">
                  <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                  <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"
                    onChange={(e) => {
                      setPromo(e.target.value);
                    }} />
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                  onClick={promoHandler}
                >Apply</button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>${(totalAmount + 10).toFixed(2)}</span>
                  </div>
                  <ModalSection />
                </div>
              </div>
            </div>
          ) :
          (
            <div className='flex flex-col items-center h-screen w-full'>
              <div className='w-full mt-8 flex justify-center'>
                <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
                  className='sm:w-[15rem] w-[9rem] mt-8'
                  alt="EmptyCart" />
              </div>
              <div className='flex flex-col items-center w-[19rem] mb-5'>
                <h2 className='text-[1.5rem] font-bold text-blue-600'>Your cart is empty</h2>
                <p className='text-center text-gray-500'>Looks Like you haven't add any product to your cart yet.</p>
              </div>
              <Link to="/allproducts">
                <button className='bg-blue-400 py-1 px-2 rounded-md mt-2'>Shop Now</button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default Cart

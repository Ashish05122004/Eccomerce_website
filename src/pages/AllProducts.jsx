import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Card from '../components/Card';
import AllProductShim from '../components/AllProductShim';

const AllProducts = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [showProduct,setShowProduct] = useState([]);
  //All Products
  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await axios(`${import.meta.env.VITE_BASE_URL}/products`);
      setAllProducts(res.data.products);
      setOriginalProducts(res.data.products);
    }
    fetchAllProducts();
  }, []);

  //Category
  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BASE_URL}/products/categories`);
        setAllCategory(res.data);
      } catch (error) {
        toast.error("Something went wrong!!");
      }
    }
    fetchAllCategory();
  }, []);

  const filterProducts = (selectCategory) => {
    const data = selectCategory ? originalProducts.filter((product) => product.category === selectCategory) :
      originalProducts;
    setAllProducts(data);
  }
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      <div className='w-full md:h-[25vh] h-[10vh] bg-red-700 object-cover relative'>
        <img src="https://e0.pxfuel.com/wallpapers/606/84/desktop-wallpaper-ecommerce-website-design-company-noida-e-commerce-banner-design-e-commerce.jpg"
          className='w-full h-full object-cover'
          alt="shopping" />
        <h1 className='absolute top-0 left-[10%] md:text-[2rem] text-[1.4rem] font-bold'>All Products</h1>
      </div>
      {/* category section */}
      <div className='w-full flex justify-center mt-5'>
        <select
          onChange={(e) => {
            if (e.target.value === "Filter by Category") {
              setShowProduct(false);
              filterProducts();
            }
            else {
              setShowProduct(true);
              filterProducts(e.target.value);
            }
          }}
          className='text-black border-2 py-2'
        >
          <option>Filter by Category</option>
          {allCategory.map((category, index) => {
            return (
              <option key={index} value={category.slug}> {category.name} </option>
            )
          })
          }
        </select>
      </div>
      {/* product section */}
      <div className='mx-auto w-11/12 mt-4'>
        {
          !allProducts.length ? (<AllProductShim size={10} />) :
            (<div className='flex flex-wrap gap-10 justify-center '>
              {allProducts.map((product) => {
                return (
                  <Card product={product} key={product.id} />
                )
              })
              }
            </div>
            )
        }
      </div>

    </div>

  )
}

export default AllProducts

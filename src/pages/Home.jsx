import React from 'react'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import GallerySection from '../components/GallerySection'
import PopularProductsSection from '../components/PopularProductsSection'
import TestimonialSection from '../components/TestimonialSection'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <HeroSection />
      <ServiceSection />
      <PopularProductsSection />
      <GallerySection />
      <TestimonialSection />
    </div>
  )
}

export default Home

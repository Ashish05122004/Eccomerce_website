import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from "react-icons/fa6";

const HeroSection = () => {
    const data = [
        {
            alt: "image1",
            url: "https://mobirise.com/extensions/commercem4/assets/images/gallery01.jpg"
        },
        {
            alt: "image2",
            url: "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            alt: "image3",
            url: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];
    const [index, setIndex] = useState(0);
    const handleInc = () => {
        setIndex(index === data.length - 1 ? 0 : index + 1);
    }
    const handleDec = () => {
        setIndex(index === 0 ? data.length - 1 : index - 1);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            handleInc();
        }, 2000)
        return () => clearInterval(interval);
    }, [index])
    return (
        <div className='max-w-[100vw] md:min-h-screen'>
            <div className='relative w-full'>
                {
                    data.map((image, i) => (
                        <div key={i} className={`${index === i?"block":"hidden"} max-w-[100v] max-h-[90vh]`}>
                            <img src={image.url} alt={data[0].alt}
                                className='w-full max-h-[90vh] object-cover'
                            />
                        </div>
                    ))
                }
                <div className='flex md:text-[3rem] text-[1.3rem] opacity-25 absolute top-[50%] justify-between w-full'>
                    <FaChevronLeft className="cursor-pointer" onClick={handleInc} />
                    <FaChevronRight className='cursor-pointer' onClick={handleDec} />
                </div>
            </div>
        </div>

    )
}

export default HeroSection

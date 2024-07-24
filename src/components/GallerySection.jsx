import React from 'react'

const GallerySection = () => {
    const data = [
        {
            url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image1"
        },
        {
            url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image2"
        },
        {
            url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image3"
        },
        {
            url: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image6"
        },
        {
            url: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image4"
        },
        {
            url: "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image5"
        },
    ]
    return (
        <div className='flex flex-col items-center py-10 '>
            <span className='text-3xl font-bold border-b-4 border-b-[red] text-center'>GALLERY</span>
            <section className="text-gray-600 body-font py-4">
                <div className="container px-5 py-2  flex flex-wrap">
                    <div className="flex flex-wrap">
                        <div className="flex flex-wrap w-1/2 hover:scale-75 transition-all duration-300">
                            <div className="md:p-2 p-1 w-1/2 ">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={data[0].url} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={data[1].url} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={data[2].url} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2 hover:scale-75 transition-all duration-300">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={data[3].url} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={data[4].url} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={data[5].url} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GallerySection

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const TestimonialSection = () => {
    return (
        <div className='w-10/12 mx-auto py-5 mb-10'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    768: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="p-4 w-full">
                        <div className="md:h-[45vh] w-full bg-gray-100 p-8 rounded flex flex-col justify-between">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                This productivity app has transformed the way my team collaborates. With its intuitive interface and powerful features, we've been able to streamline our workflow and meet our deadlines.
                            </p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://cdn2.hubspot.net/hubfs/53/testimonial-request-template-1.jpg"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Sarah Johnson</span>
                                    <span className="text-gray-500 text-sm">Project Manager</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-4 w-full">
                        <div className="md:h-[45vh] w-full bg-gray-100 p-8 rounded flex flex-col justify-between">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                Our marketing campaigns have never run more smoothly. The collaborative tools in this app allow our team to communicate and share ideas seamlessly, leading to more innovative and effective campaigns.
                            </p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAumjjgoy7WEgnhS9o5Tkk9NQJ0aHOAqlgQ&s"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Emily White</span>
                                    <span className="text-gray-500 text-sm">Marketing Director</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-4 w-full">
                        <div className="md:h-[45vh] w-full bg-gray-100 p-8 rounded flex flex-col justify-between">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                From tracking bugs to managing sprints, this app has significantly improved our development process. The integration with other tools we use makes it an indispensable part of our workflow.
                            </p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://www.hubspot.com/hs-fs/hubfs/Testimonial-lead-gen-1.webp?width=595&height=400&name=Testimonial-lead-gen-1.webp"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Michael Lee</span>
                                    <span className="text-gray-500 text-sm">Software Developer </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-4 w-full">
                        <div className="md:h-[45vh] w-full bg-gray-100 p-8 rounded flex flex-col justify-between">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                Starting a new business is challenging, but this productivity app has helped me stay organized and focused. The goal-setting and tracking features have been particularly helpful in keeping my startup on track.
                            </p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREm0LYAJjrfe5s30aJ02LMSOekjcB0moxcpBc0AZdqw3Baxd5tTkAOg-9XeW_Pc66R0NA&usqp=CAU"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Jessica Brown</span>
                                    <span className="text-gray-500 text-sm">Entrepreneur and Founder</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-4 w-full">
                        <div className="md:h-[45vh] w-full bg-gray-100 p-8 rounded flex flex-col justify-between">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                As a teacher, managing lesson plans, assignments, and communication with students and parents can be overwhelming. This app has made it so much easier to keep everything organized and accessible.
                            </p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwZ2jdQdldYVMno2WwvVPMiuOxRYr1r1Y1h3MihZsTgtYjgfEL7b0MVqFlFw1N-y_wxE&usqp=CAU"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">David Martinez</span>
                                    <span className="text-gray-500 text-sm"> Teacher at Riverdale High School</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default TestimonialSection

import React from 'react'

const About = () => {
  return (
    <div classNameName='min-h-screen '>
      <div className='w-full md:h-[30vh] h-[15vh] bg-red-700 object-cover relative'>
        <img src="https://eventage.in/wp-content/uploads/2022/05/about-us.jpg"
          className='w-full h-full object-cover'
          alt="shopping" />
      </div>
      <div className='mx-auto w-10/12'>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero"
                src="https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?w=1480&t=st=1721720240~exp=1721720840~hmac=65c89f50f0bab15907e47ba0c11df67403e027c2fde64d991486f61e070471ef" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who we are?
              </h1>
              <p className="mb-8 leading-relaxed text-[1.2rem]">
                The SmartShope Group is one of India’s leading digital commerce entities and includes group companies SmartShope, Myntra, SmartShope Wholesale, SmartShope Health+, and Cleartrip.
                Started in 2007, SmartShope has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 500 million, SmartShope's marketplace offers over 150 million products across 80+ categories.
              </p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <span>
                <h1 className="title-font sm:text-xl text-lg mb-4 text-gray-900 font-bold">TECHNOLOGY AT SMARTSHOPE</h1>
                <p className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">INNOVATION</p>
              </span>
              <p className="mb-8 leading-relaxed text-[1.2rem]">
                SmartShope technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">READ MORE</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" 
              src="https://corporate.Flipkart.net/assets/images/technology-image.png" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

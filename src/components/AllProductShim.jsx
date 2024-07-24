import React from 'react'

const AllProductShim = ({size}) => {
    const arr = new Array(size).fill("");
    return (
        <div className='flex flex-wrap -m-4 justify-center gap-10 mt-4'>
            {
                arr.map((item, i) => (
                    <div key={i} className="lg:w-1/5 md:w-1/2 animate w-full bg-gray-100 p-6 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <div className='w-full h-[14rem] bg-[#ccc]'></div>
                        <div className="mt-4">
                            <h2 className="bg-[#ccc] h-[1.3rem] w-[12rem] mb-[2px] rounded-sm"></h2>
                            <h3 className="bg-[#ccc] h-[1.3rem] w-[3rem] rounded-sm"></h3>
                            <div className='flex justify-between w-full'>
                                <p className="mt-1 bg-[#ccc] h-[1.3rem] w-[7rem] rounded-sm"></p>
                                <button className='bg-[#ccc] h-[1.8rem] w-[7rem] rounded-md'></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProductShim

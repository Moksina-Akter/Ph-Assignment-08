import React from 'react';

const Trusted = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
            <h1 className='text-white text-4xl font-bold p-4 md:pt-10 text-center'>Trusted by Millions, Built for You</h1>

            <div className="flex justify-between items-center p-9 max-w-7xl mx-auto">
                <div className='flex flex-col justify-center items-center gap-2 '>
                    <p className='text-white'>Total Downloads</p>
                    <h1 className='font-extrabold text-white text-5xl'>29.6M</h1>
                    <p className='text-white'>21% more than last month</p>
                </div>

                <div className='flex flex-col justify-center items-center  gap-2'>
                    <p className='text-white'>Total Reviews</p>
                    <h1 className='font-extrabold text-white text-5xl'>906K</h1>
                    <p className='text-white'>46% more than last month</p>
                </div>

                <div className='flex flex-col justify-center items-center  gap-2 '>
                    <p className='text-white'>Active Apps</p>
                    <h1 className='font-extrabold text-white text-5xl'>132+</h1>
                    <p className='text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Trusted;
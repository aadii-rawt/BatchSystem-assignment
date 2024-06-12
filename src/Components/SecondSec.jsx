import React from 'react'

function SecondSec() {
    return (
        <div className='flex flex-col lg:flex-row items-center'>
            <div className="img-box relative">
                <img src="/sec-img.png" alt="" />
                <img src="/sec.png" alt="" className='absolute inset-0 top-14 left-14 -z-10' />
            </div>
            <div className=" relative section-text ">
                <h3 className='text-[#FF5555]'>FEATURES</h3>
                <h1 className='font-bold tracking-tighter text-4xl sm:text-5xl mb-8'>Uifry Premium</h1>
                <div className="my-4">
                    <h4 className='tracking-tighter font-bold flex gap-2 my-2'> <img src="/star-05.png" alt="" />Budgeting Intervals</h4>
                    <p className='tracking-tighter'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ad, odio fuga commodi nesciunt labore!</p>
                </div>
                <div className="my-4">
                    <h4 className='tracking-tighter font-bold flex gap-2 my-2'> <img src="/cube-02.png" alt="" />Budgeting Intervals</h4>
                    <p className='tracking-tighter'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ad, odio fuga commodi nesciunt labore!</p>
                </div>
                <div className="my-4">
                    <h4 className='tracking-tighter font-bold flex gap-2 my-2'><img src="/cube-04.png" alt="" />Budgeting Intervals</h4>
                    <p className='tracking-tighter'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ad, odio fuga commodi nesciunt labore!</p>
                </div>
                <img src="/sec.png" alt="" className='absolute hidden lg:block top-10 right-[-100px]  -z-10' />
            </div>
        </div>
    )
}

export default SecondSec
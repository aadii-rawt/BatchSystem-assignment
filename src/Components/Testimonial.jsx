import React from 'react'

function Testimonial() {
    return (
        <div className='section'>
            <div className='text-center'>
                <h4>TESTIMONIAL</h4>
                <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tighter'>What Our Users <br /> Say About Us?</h1>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center mt-3'>
                <div className='relative'>
                    <img src="/texstimonial.png" alt="fourth section image" />
                    <img src="/sec.png" alt="" className='absolute left-10 top-20 -z-10' />
                </div>
                <div className='lg:w-[50%]'>
                    <h4 className='tracking-tighter font-bold text-3xl my-3'>The Best Financial Accounting <br /> App Ever?</h4>
                    <p className='tracking-tighter text-lg text-gray-600'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam na tus mollitia sequi tempora, architecto excep tus mollitia sequi tempora, architecto excepturi aut, dic dipisicing elit. Illo totam n atus mollitia sequi tempora, architecto pturi aut, dic dipisicing elit. Illo totam n atus mollitia sequi tempora, architecto pturi aut, dic dipisicing elit. Illo totam n atus mollitia sequi tempora, architecto excepturi aut, dicta eveniet hic facere ad quibusdam, a quam quasi nihil est neque fugit."</p>
                    <img src="/users.png" alt="" className='my-4' />
                    <h3 className='font-bold tracking-tighter text-lg'>Nick Jones</h3>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
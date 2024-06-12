import React from 'react'

function ThridSec() {
    return (
        <div className='section flex flex-col lg:flex-row lg:items-center'>
            <div className='lg:w-[50%]'>
                <h3 className='text-[#FF5555]'>ADVANTAGES</h3>
                <h1 className='font-bold tracking-tighter text-4xl sm:text-5xl mb-8'>Why choose Uifry?</h1>
                <h4 className='tracking-tighter font-bold  text-3xl flex gap-2 my-2 items-center'><img src="/noti.png" alt="" className='w-12' />Clever Notifications</h4>
                <p className='tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam na tus mollitia sequi tempora, architecto excep tus mollitia sequi tempora, architecto excepturi aut, dic dipisicing elit. Illo totam n atus mollitia sequi tempora, architecto excepturi aut, dicta eveniet hic facere ad quibusdam, a quam quasi nihil est neque fugit.</p>
            </div>
            <div className='relative'>
                <img src="/third-sec.png" alt="third section image" />
                <img src="/sec.png" alt="" className='absolute inset-0 top-28 left-14 -z-10' />
            </div>
        </div>
    )
}

export default ThridSec
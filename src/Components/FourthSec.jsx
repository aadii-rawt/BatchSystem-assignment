import React from 'react'

function FourthSec() {
  return (
    <div className='section flex flex-col lg:flex-row items-center'>
            <div className='relative'>
                <img src="/fourth-sec.png" alt="fourth section image" />
                <img src="/sec.png" alt="" className='absolute right-10 bottom-10 -z-10' />
            </div>
            <div className='lg:w-[50%]'>
                <h4 className='tracking-tighter font-bold flex gap-2 my-2 items-center text-3xl'><img src="/fourth-icon.png" alt="" className='w-12' />Fully Customizable</h4>
                <p className='tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam na tus mollitia sequi tempora, architecto excep tus mollitia sequi tempora, architecto excepturi aut, dic dipisicing elit. Illo totam n atus mollitia sequi tempora, architecto excepturi aut, dicta eveniet hic facere ad quibusdam, a quam quasi nihil est neque fugit.</p>
            </div>
        </div>
  )
}

export default FourthSec
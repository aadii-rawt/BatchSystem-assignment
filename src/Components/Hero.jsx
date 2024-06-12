import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className="hero-text lg:w-[50%] lg:mt-20 ">
                <h1 className='font-bold text-5xl lg:text-6xl'>Make The Best <br /> Financial Decisions</h1>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
                    Fauclibus Tincidunt Eu Adipiscing Socils Arcu Lorem porttiro.
                </p>
                <div className='py-5'>
                    <img src="/hero-text.png" alt="" />
                </div>
                <div className='flex items-center gap-10'>
                    <a href="#" className="btn">Get Started</a>
                    <a href="" className='flex items-center gap-3'> <img src="/play.png" alt="" />Watch Video</a>
                </div>
            </div>
            <div className="hero-img lg:w-[50%]">
                <div className='relative'>
                <img src="/phone.png" alt="" />
                <div>
                <img src="/sec.png" alt="" className='absolute -z-10 right-0 bottom-0' /> 
                <img src="/star.png" alt="" className='absolute -z-10 left-[100px] bottom-[150px]' /> 
                <img src="/star.png" alt="" className='absolute -z-10 right-[0px] top-[50px]' /> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
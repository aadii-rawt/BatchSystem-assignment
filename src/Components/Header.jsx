import React, { useState } from 'react'

function Header() {
    const [isDark,setIsDark] = useState(false)
    function handleTheme(){
        // console.log();
        document.querySelector("body")
        .classList.toggle("dark")
        setIsDark(!isDark)
    }
  return (
    <div className='flex items-center justify-between'>
        <div className="nav-left flex items-center gap-6">
            <img src="/Group.png" alt="logo" />
            <nav className='hidden md:block'>
                <ul className='flex gap-5 font-semibold cursor-pointer'>
                    <li className='font-bold text-[#FF5555]'>Home</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>
            </nav>
        </div>
        <div className="nav-right flex gap-4">
            <button onClick={handleTheme} className='border  px-5 py-2 border-black dark:border-white rounded'>{isDark ? "Light" : "Dark" }</button>
            <a href="#" className='btn'>Download</a>
        </div>
    </div>
  )
}

export default Header
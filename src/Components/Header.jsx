import React from 'react'

function Header() {
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
        <div className="nav-right">
            <a href="#" className='btn'>Download</a>
        </div>
    </div>
  )
}

export default Header
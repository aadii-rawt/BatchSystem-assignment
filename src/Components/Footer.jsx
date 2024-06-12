import React from 'react'

function Footer() {
  return (
    <div >
        {/* grid-cols-2 sm:grid-cols-3 md:grid-cols-5 */}
    <div className='footer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 '>
        <div>
            <ul>
                <li><img src="/Group.png" alt="logo" /></li>
                <li>Help@Frybix.com</li>
                <li>+1234 456 6789</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Links</li>
                <li>Home</li>
                <li>About US</li>
                <li>Bookings</li>
                <li>Blog</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Legal</li>
                <li>Terms Of USe</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Product</li>
                <li>Take Tour</li>
                <li>Live Chat</li>
                <li>Reviews</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Newsletter</li>
                <li>Stay Up To Date</li>
                <li className='flex'><input type="text" placeholder='Your email' className='outline-0' /> <a href="" className='btn'>Subscribe</a></li>
            </ul>
        </div>

    </div>
        <hr className=' h-[1px] my-4'/>
        <p className='text-center'>Copyright 2022 Uifry.com All Rights Reserved</p>
    </div>
  )
}

export default Footer
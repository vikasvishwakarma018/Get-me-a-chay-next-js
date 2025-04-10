import React from 'react'

const Footer = () => {
  return (
<div>
    <div className="footer w-full  text-white   flex  bg-gray-950 items-center justify-between h-40 space-y-2.5  ">
        <div className="w-[80%] space-y-4 px-5">
<div className="  text-lg pt-0 "> Copyright © 2024 Get Me A Chai | All rights reserved!</div>
<div className="text-sm text-gray-500 ">Made by vikas vishwakarma with ❤</div>
<div className="list">
    <ul className='flex space-x-3.5 cursor-pointer'>
        <li className='hover:text-gray-400 '>About Us</li>
        <li className='hover:text-gray-400 '>Contact Us </li>
        <li className='hover:text-gray-400 '>Privicy policy </li>
        <li className='hover:text-gray-400 '>Terms & Condition </li>
        <li className='hover:text-gray-400 '>Cancellation/Refund Policies </li>
    </ul>
</div>
</div>

<h1 className='text-white  w-[10%]'> Follow me on</h1>
<div className="btns ">
<button className=' flex gap-3 '>GitHub</button>
<button className=' flex gap-3 '>LinkedIn</button>
</div>

</div>
</div>
  )
}

export default Footer

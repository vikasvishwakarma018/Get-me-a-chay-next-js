import React from 'react'

const Navbar = () => {
  return (
    <div>
<nav className='flex  bg-gray-900 text-white  items-center justify-between h-20  ' >
    <div className="logo mx-5 text-xl">GetMeChay!</div>
    <div className="btns space-x-4  justify-center ">
    <button>
         <svg className=' bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-600 hover:to-pink-800  text-white w-11 h-8 absolute right-25 top-6  items-center justify-center rounded-lg   '>
        <svg className="size-4 mb-1 md:mb-1.5 font-bold  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg>
        </svg>
  
    </button>
    <button className='text-white bg-linear-to-r from-cyan-500 to-blue-500  hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 rounded-xl  px-5 py-2  mx-2 '>Login</button>

    </div>
    
</nav>
    </div>
  )
}

export default Navbar

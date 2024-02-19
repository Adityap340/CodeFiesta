import React from 'react'
import IMG_6349 from '../assets/IMG_6349.png'

const Navbar = () => {
  return (


    <nav className="bg-white border-gray-200 dark:bg-pink-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={IMG_6349} className="h-14" alt="Flowbite Logo" />
          <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">CodeFiesta</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
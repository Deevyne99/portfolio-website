import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <header className='w-full fixed flex h-[70px] bg-[#060f1e] justify-between items-center px-4 text-gray-300'>
      <div className='z-10'>
        <h2 className='text-2xl text-white font-bold uppercase'>Deekay</h2>
      </div>

      <ul className='hidden md:flex '>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden flex z-10'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}
      <ul
        className={`${
          nav
            ? 'absolute top-0 left-0 w-full h-screen bg-[#060f1e] flex flex-col justify-center items-center'
            : 'hidden'
        }`}
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
    </header>
  )
}

export default Navbar

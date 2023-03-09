import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

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
      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-blue-500'>
            <a href='/' className='flex justify-between w-full text-gray-200'>
              linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-[#333333]'>
            <a href='/' className='flex justify-between w-full text-gray-200'>
              github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-[#6fc2b0]'>
            <a href='/' className='flex justify-between w-full text-gray-200'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-blue-500'>
            <a href='/' className='flex justify-between w-full text-gray-200'>
              twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar

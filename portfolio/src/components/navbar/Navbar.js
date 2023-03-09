import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import { Link } from 'react-scroll'

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
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className='py-6 text-4xl'>
          <Link to='home' onClick={handleClick} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='about' onClick={handleClick} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='skills' onClick={handleClick} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='home' onClick={handleClick} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='contact' onClick={handleClick} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-blue-500'>
            <a
              href='https://www.linkedin.com/in/deevyne99'
              className='flex justify-between w-full text-gray-200'
              target='_blank'
            >
              linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-[#333333]'>
            <a
              href='https://github.com/Deevyne99'
              className='flex justify-between w-full text-gray-200'
              target='_blank'
            >
              github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-[#6fc2b0]'>
            <a
              href='/https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hi+There&to=kaludivine545@gmail.com&body=body+goes+here'
              className='flex justify-between w-full text-gray-200'
              target='_blank'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300 capitalize bg-blue-500'>
            <a
              href='https://twitter.com/kaluDivine15'
              className='flex justify-between w-full text-gray-200'
              target='_blank'
            >
              twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar

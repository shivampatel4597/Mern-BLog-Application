import { Navbar, TextInput, Dropdown } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const location = useLocation();
  const isActive = (path)=> location.pathname === path;
  return (
    <div className='w-full px-2 bg-black flex items-center justify-between lg:p-4 border-b-2  '>
      <Link to='/' className=' text-sm sm:text-xl font-semibold text-white'>
        <span className=' px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>SHIVAM'S</span>blog
      </Link>
      <form className='relative hidden lg:block'>
        <TextInput type='text' placeholder='search...' className='pr-10' />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AiOutlineSearch />
        </span>
      </form>
      <button className=' w-14 h-10  flex items-center justify-center text-white'>
        <AiOutlineSearch />
      </button>
      <div className="links-container hidden lg:flex flex-row  gap-10  rounded">
          <Link to="/" className={`block text-white hover:underline rounded px-2 ${isActive('/') ? "bg-purple-400": ""} `}>
            Home
          </Link>
          <Link to="/about" className={`block text-white hover:underline rounded px-2 ${isActive('/about') ? "bg-purple-400": ""} `}>
            About
          </Link>
          <Link to="/project" className={`block text-white hover:underline rounded px-2 ${isActive('/project') ? "bg-purple-400": ""} `}>
            Projects
          </Link>




        </div>
      <div className='flex items-center gap-2 md:order-2'>
        <button className='w-12 h-8 hidden sm:inline  text-gray-500 rounded bg-blue-300'>
          <FontAwesomeIcon icon={faMoon} />
        </button>
        <Link to="/signin">
          <button className='w-16 h-8 text-white bg-gradient-to-r from-purple-500  to-blue-500 rounded '>
            Sign in
          </button>
        </Link>

        <div className='lg:hidden'>
          <Dropdown className=" text-white bg-gradient-to-r w-[20rem] p-5 text-md font-medium mt-8 from-purple-500  to-blue-500 rounded " label="MENU" dismissOnClick={false} >
            <Dropdown.Item ><Link to="/" className={`${isActive('/') ? "text-white w-full bg-black  text-left border-2 rounded": ""} `}>Home</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/about" className={`${isActive('/about') ? "text-white w-full bg-black  text-left border-2 rounded": ""} `}>About</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/project" className={`${isActive('/project') ? "text-white w-full bg-black  text-left border-2 rounded": ""} `}>Projects</Link></Dropdown.Item>

          </Dropdown>

        </div>

     
      </div>

    </div>
  );
};

export default Header;

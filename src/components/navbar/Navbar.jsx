import React, { useState, useRef, useEffect } from 'react'
import Logo from './pages/Auth/Logo'
import Menu from './pages/Auth/Menu'
import MobileMenu from './pages/Auth/MobileMenu'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = ({search, setSearch, setCategory}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative' ref={menuRef}>
      <nav className='h-16 bg-blue-400 flex justify-between items-center px-6 md:px-14 font-semibold'>
        <Logo setSearch={setSearch} setCategory={setCategory}/>

        {/* Desktop Menu */}
        <div className='hidden md:flex'>
          <Menu search={search} setSearch={setSearch}/>
        </div>

        {/* Hamburger Button - Mobile only */}
        <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={28}/> : <RxHamburgerMenu size={28}/>}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-blue-400 z-50 flex flex-col px-6 py-4 gap-4 font-semibold shadow-lg'>
          <MobileMenu setIsOpen={setIsOpen}/>
        </div>
      )}
    </div>
  )
}

export default Navbar
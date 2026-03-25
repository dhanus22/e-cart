import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './pages/Auth/Logo'
import Menu from './pages/Auth/Menu'


const Navbar = ({search, setSearch, setCategory}) => {
  return (
    <div className='relative' >
      <nav className='h-18 bg-blue-400  flex justify-between items-center px-14 font-semibold '>
        <Logo setSearch = {setSearch} setCategory = {setCategory}/>
        <Menu search = {search} setSearch = {setSearch}/>
        
      </nav>
    </div>
  )
}

export default Navbar
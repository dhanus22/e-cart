import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import {Toaster} from 'react-hot-toast'

const Layout = () => {
   
  let [search, setSearch] = useState('')
  let [category, setCategory] = useState('')

  return (
    <div >
        <Navbar search = {search} setSearch = {setSearch} category = {category} setCategory = {setCategory}/>
        <Outlet context={{search, setSearch, category, setCategory}}/>
        <Toaster/>
    </div>
  )
}

export default Layout
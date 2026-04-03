import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo1.png'

const Logo = ({setSearch,  setCategory}) => {

  async function handlelogo(){
    setSearch('')
    setCategory('')
  }

  return (
    <Link to = "/home">
      <img src={logo} alt="" onClick={handlelogo} className='h-9' />
    </Link>
  )
}

export default Logo
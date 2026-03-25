import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({setSearch,  setCategory}) => {

  async function handlelogo(){
    setSearch('')
    setCategory('')
  }

  return (
    <Link to = "/home">
    <div className='left_nav' onClick={handlelogo}>Logo</div>
    </Link>
  )
}

export default Logo
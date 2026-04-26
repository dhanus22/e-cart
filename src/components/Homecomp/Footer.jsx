import React from 'react'
import India from '/India.png'
import { Link } from 'react-router-dom'
import logo from '/logo1.png'

const Footer = () => {
  function handlelogo() {
    window.scrollTo(0, 0)
  }

  return (
    <div className='bg-black text-white mt-6'>


      <div className='bg-blue-950'>


        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20 py-10 font-extralight'>

          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Get to Know Us</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Contact</li>
          </ul>

          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Connect with Us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>

          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Make Money with Us</li>
            <li>Sell on MalarCart</li>
            <li>Protect Your Brand</li>
            <li>Global Selling</li>
            <li>Supply chain</li>
            <li>Become an Affiliate</li>
            <li>Advertisements</li>
          </ul>

          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Services</li>
            <li>Accounts</li>
            <li>Products</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Help</li>
          </ul>

        </div>

        <hr className='border-gray-700' />

        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14 py-4 px-8'>
          <Link to="/home">
            <img src={logo} alt="MalarCart logo" onClick={handlelogo} className='h-8' />
          </Link>
          <div className='flex gap-4 font-semibold items-center'>
            <input type="text" placeholder="English" readOnly
              className='border outline-none cursor-pointer text-center w-[100px] text-[14px] py-1 rounded-[3px]' />

            <div className='flex items-center justify-center border border-gray-100 rounded-[3px] px-2 py-1 gap-2 w-[100px]'>
              <img src={India} alt="India flag" className='h-4' />
              <span className='text-[14px] cursor-pointer'>India</span>
            </div>
          </div>
        </div>

      </div>

      <div className='flex justify-center items-center py-6'>
        <h1 className='text-sm'>Copyright @ 2026</h1>
      </div>

    </div>
  )
}

export default Footer
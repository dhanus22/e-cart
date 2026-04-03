import React from 'react'
import India from '/India.png'
import { Link } from 'react-router-dom'
import logo from '/logo1.png'



const Footer = () => {

  function handlelogo(){
    window.scrollTo(0, 0)
  }

  return (
    <div className='h-[550px] bg-black   text-white mt-6'>
      <div className='  h-[80%] bg-blue-950 '>
        <div className='flex h-[80%] justify-center py-12 font-extralight gap-40'>
          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Get to Know Us</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Contact</li>
          </ul>

          <ul className='flex flex-col gap-1.5'>
            <div className='font-bold flex flex-col gap-0'>
              <li className='leading-none'>Connect with <br />Us</li>
            </div>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>

          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Global Selling</li>
            <li>Supply chain</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by organization</li>
            <li>Advertizments</li>
          </ul>

          <ul className='flex flex-col gap-1.5'>
            <li className='font-bold'>Services</li>
            <li>Accounts</li>
            <li>Products</li>
            <li>Delilvery</li>
            <li>Returns</li>
            <li>Help</li>
          </ul>
        </div>
        <hr />

        <div className='logo h-[20%]  flex justify-center items-center gap-14'>
          <Link to = "/home">
      <img src={logo} alt="" onClick={handlelogo} className='h-8.5' />
    </Link>
          <form action="" className='flex gap-4 font-semibold'>
            <input type="" placeholder="English" className='border-1 outline-none cursor-pointer text-center w-[120px] text-[14px]  py-1 rounded-[3px]' />
            <img src={India} alt="" className='h-5 relative top-1.5 left-11' />
            <input type="" placeholder="India" className='border-1 outline-none cursor-pointer text-center w-[100px] text-[14px] py-1 rounded-[3px]' />
          </form>
        </div>

      </div>

      <div className='h-[20%] flex justify-center items-center'>
        <h1>Copyright @ 2026</h1>
      </div>
    </div>
  )
}

export default Footer

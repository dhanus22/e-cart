import React, { useContext } from 'react'
import { Addwishlist } from '../../../contextapi/Wishcontext'
import Wishlistcard from './Wishlistcard'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Wishlist = () => {

  let {wishitems} = useContext(Addwishlist)

  return (
    <>
    <section className=' mx-14 mt-10 flex flex-col gap-4 items-center '>
      <h1 className='font-bold font-serif text-3xl'>My wishlist</h1>
      {wishitems.length != 0? (
        <div className='flex flex-wrap w-full justify-center gap-x-6  gap-y-4'>
      {wishitems.map((items)=> (
        <Wishlistcard key={items.id} id = {items.id} image = {items.image} 
        title = {items.title} description = {items.description} price = {items.price}/>
      ))}
    </div>
      ) : (<div className='flex flex-col justify-center items-center gap-6'>
        <h1 className='text-[18px]'>Your Wishlist is empty!</h1>
        <p>Add few products to your wishlist and explore more</p>
        <Link to="/home" className='text-blue-500 border-2 border-blue-500 py-2 px-3 
        font-semibold hover:text-white hover:bg-blue-500'>Shop now</Link>
      </div>
        
      )
      
    }
   </section>
    <Footer/>
  </>
  )
}

export default Wishlist
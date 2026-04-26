import React, { useContext } from 'react'
import { Addwishlist } from '../../../contextapi/Wishcontext'
import Wishlistcard from './Wishlistcard'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import { Authcontext } from '../../../contextapi/Contextapi'
import { IoCartOutline } from 'react-icons/io5'

const Wishlist = () => {
  let { wishitems } = useContext(Addwishlist)
  let uservalid = useContext(Authcontext)

  function validuser(){
    return (
      <section className='px-4 md:mx-14 mt-10 flex flex-col gap-4 items-center'>
        <h1 className='font-bold font-serif text-3xl'>My wishlist</h1>

        {wishitems.length != 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
            {wishitems.map((items) => (
              <Wishlistcard
                key={items.id}
                id={items.id}
                image={items.image}
                title={items.title}
                description={items.description}
                price={items.price}
              />
            ))}
            <Link to="/home" className='text-blue-500 border-2 border-blue-500 py-2 px-3 text-center font-semibold hover:text-white hover:bg-blue-500'>
          Continue Shopping
        </Link>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center gap-6 py-20 text-center px-4'>
            <h1 className='text-[18px]'>Your Wishlist is empty!</h1>
            <p>Add few products to your wishlist and explore more</p>
            <Link to="/home" className='text-blue-500 border-2 border-blue-500 py-2 px-3 font-semibold hover:text-white hover:bg-blue-500'>
              Shop now
            </Link>
          </div>
        )}
        
      </section>
    )
  }

  function invaliduser(){
    return (
      <>
      <section className='flex flex-col items-center justify-center gap-6 py-20 px-4'>
                      <IoCartOutline size={150} className='text-gray-400'/>
                      <h1 className='text-xl md:text-2xl font-semibold text-center'>
                          Login to view your wishlist!
                      </h1>
                      <div className='flex gap-4 justify-center items-center'>
                          <Link to="/login" className='text-blue-500 border-2 border-blue-500 py-2 px-3 font-semibold hover:text-white hover:bg-blue-500'>
                              Sign in
                          </Link>
                          <h1>or</h1>
                          <Link to="/register" className='text-blue-500 border-2 border-blue-500 py-2 px-3 font-semibold hover:text-white hover:bg-blue-500'>
                              Register
                          </Link>
                      </div>
                  </section>
      </>
      
    )
  }

  return (
    <>
      {uservalid? validuser() : invaliduser()}
      <Footer/>
    </>
  )
}

export default Wishlist
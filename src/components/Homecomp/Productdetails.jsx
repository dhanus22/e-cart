import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import Footer from './Footer';
import { Addcart } from './../../contextapi/Cartcontext'
import toast from 'react-hot-toast';
import { _Auth } from '../../Backend/Bass';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Addwishlist } from '../../contextapi/Wishcontext';

const Productdetails = () => {
  const dbRou = useParams();
  const [spdata, setspData] = useState();
  let { addtocart: addToCartCtx } = useContext(Addcart)
  let { addtowishlist, wishitems, remove } = useContext(Addwishlist)

  const loadData = async () => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}/products/${dbRou.id}`);
    const res = await data.json();
    setspData(res);
  };

  console.log(spdata);
  

  useEffect(() => {
    window.scrollTo(0, 0)
    loadData();
  }, []);

  let ratecount = Math.round(spdata?.rating.rate)
  let count = 5

  const handleAddToCart = async () => {
    try {
      const user = _Auth.currentUser;
      if (user && user.emailVerified) {
        addToCartCtx(spdata);
        toast.success("Added to cart");
      } else {
        toast.error("Please login to add to cart");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };



  let iswishllisted = wishitems.some(item => item.id === spdata?.id)

  let handlewishlist = () => {
    try {
      let user = _Auth.currentUser
      if (user && user.emailVerified) {
        if (iswishllisted) {
          remove(spdata.id)
          toast.success("Removed from wish list")
        } else {
          addtowishlist(spdata)
        }
      } else {
        toast.error("Login to add to wish list")
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className='min-w-screen min-h-screen'>
      <div className='w-full h-full flex flex-col justify-center items-center mt-6 px-4'>

        {/* Product image */}
        <div className='w-full flex justify-center'>
          <img src={spdata?.image} alt="" className='h-[200px] md:h-[400px] object-contain'/>
        </div>

        {/* Price and rating */}
        <div className='my-2 flex flex-col md:flex-row gap-2 md:gap-4 text-[18px] md:text-[20px] items-center'>
          <p className='font-semibold'>Price: ${spdata?.price}</p>
          <div className='flex justify-center items-center gap-0.5'>
            <p>{spdata?.rating.rate}</p>
            <span className='flex gap-0.5'>
              {[...Array(count)].map((_, i) => (
                <FaStar size={20} key={i}
                  className={i < ratecount ? "text-yellow-400" : "text-transparent [stroke:#FACC15] [stroke-width:30]"}/>
              ))}
            </span>
          </div>
        </div>

        {/* Title and description */}
        <div className='w-full max-w-[800px] flex flex-col justify-center items-center px-2'>
          <h1 className='font-bold text-[20px] md:text-[28px] underline text-shadow-lg text-center'>
            {spdata?.title}
          </h1>
          <p className='text-gray-800 text-center text-[14px] md:text-[16px] mt-2'>
            {spdata?.description}
          </p>
        </div>

        {/* Action buttons — stack on mobile */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mt-4 w-full max-w-[600px] px-2'>
          <Link to="/home" className='w-full sm:w-auto'>
            <button className='w-full cursor-pointer font-semibold text-[14px] border-2 border-blue-400 py-2 px-4 rounded-[2px] text-blue-500 hover:bg-blue-500 hover:text-white'>
              Close
            </button>
          </Link>
          <button onClick={handleAddToCart}
            className='w-full sm:w-auto cursor-pointer font-semibold text-[14px] border-2 border-blue-400 py-2 px-4 rounded-[2px] text-blue-500 hover:bg-blue-500 hover:text-white'>
            Add to cart
          </button>
          <button onClick={handlewishlist}
            className='w-full sm:w-auto cursor-pointer font-semibold text-[14px] border-2 border-blue-400 py-2 px-4 rounded-[2px] text-blue-500 hover:bg-blue-500 hover:text-white flex justify-center gap-2'>
            {iswishllisted ? <FaHeart size={20}/> : <FaRegHeart size={20}/>}
            {iswishllisted ? "Remove from wishlist" : "Add to wishlist"}
          </button>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Productdetails
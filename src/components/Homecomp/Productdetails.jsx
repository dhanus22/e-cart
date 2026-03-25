import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { count } from 'firebase/firestore';
import Footer from './Footer';
import {Addcart} from './../../contextapi/Cartcontext'
import toast from 'react-hot-toast';

const Productdetails = () => {

  const dbRou = useParams();

  const [spdata, setspData] = useState();

  let { cartitems, addtocart: addToCartCtx } = useContext(Addcart)

  const loadData = async () => {
    const data = await fetch(`http://localhost:3006/products/${dbRou.id}`);
    const res = await data.json();
    setspData(res);
    //console.log(res);
  };

  useEffect(() => {
    loadData();
  }, []);
   
  let ratecount = Math.round(spdata?.rating.rate)
  let count = 5
  //console.log(ratecount);
  
  function handleAddToCart() {
    addToCartCtx(spdata)
    toast.success("Added to cart")
}

  

  return (
    <div className='min-w-screen min-h-screen'>
      {/* optional chaining */}
      <div className='w-full h-full flex flex-col justify-center items-center mt-6'>
        <div className=''>
          <img src={spdata?.image} alt="" className='h-[400px] shrink-0' />
        </div >

        <div className='my-2 flex gap-4 text-[20px]'>
          <p className='font-semibold'>Price: ${spdata?.price}</p>

          <div className='flex justify-center items-center gap-0.5'>
          <p className=''>{spdata?.rating.rate}</p>
          <span className='flex gap-0.5'>
            {[...Array(count)].map((_, i)=>(
                 <FaStar size={20} key={i} className={i< ratecount? "text-yellow-400" : "text-transparent [stroke:#FACC15] [stroke-width:30]"}/> 
            ))}
          
          </span>
          </div>
          
        </div>

        <div className='w-[800px] flex flex-col justify-center items-center'>
          <h1 className='font-bold text-[28px] underline text-shadow-lg'>{spdata?.title}</h1>
          <p className='text-gray-800 justify-center'>{spdata?.description}</p>

        </div>
      
      <div className='flex justify-between items-center gap-4'>
      <Link to="/home">
            <button className='cursor-pointer font-semibold text-[14px] border-2 mt-2 border-blue-500 py-2 px-4 rounded-[2px] text-blue-500 hover:bg-blue-500 hover:text-white '>Close</button></Link>
            <button className='cursor-pointer font-semibold text-[14px] border-2 mt-2 border-blue-500 py-2 px-4 rounded-[2px] text-blue-500 hover:bg-blue-500 hover:text-white ' onClick={handleAddToCart}>Add to cart</button>
      </div>
          

      </div>
    <Footer/>
    </div>
  )
}

export default Productdetails
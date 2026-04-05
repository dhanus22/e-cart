import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Addwishlist } from '../../../contextapi/Wishcontext'
import { FaRegTrashAlt } from "react-icons/fa";

const Wishlistcard = ({image, title, price, id, description}) => {

    let {remove} = useContext(Addwishlist)

  return (
    <div className='w-[290px] h-[400px] flex flex-col rounded-[8px] shadow '>

                <div className='w-full h-[180px] flex items-center justify-center mt-3 shrink-0'>
                    <img src={image} alt="product" className='w-[70%] h-full object-contain' />
                </div>

                <div className="flex flex-col flex-1 w-full px-4 pt-2 pb-3 gap-1 overflow-hidden">
                    <div className="flex flex-col gap-1 flex-1">
                        <h1 className='text-[14px] font-bold leading-tight'>{title.slice(0, 28)}</h1>
                        <h2 className="text-[13px] text-gray-600 leading-snug">{description.slice(0, 90)}</h2>
                        <h3 className="font-bold text-[14px]">${price}</h3> 
                    </div>

                    <div className='w-full flex justify-between gap-4 items-center'>
                    <Link to={`/productDetails/${id}`} className="w-full py-1 text-[12px] text-center font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer rounded-[4px]">
                        View data
                    </Link>
                    <FaRegTrashAlt size={18} onClick={()=>remove(id)} className='text-red-700 cursor-pointer'/>
                    </div>
                    
                </div>
            </div>
  )
}

export default Wishlistcard
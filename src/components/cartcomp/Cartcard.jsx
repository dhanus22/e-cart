import React, { useContext } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { Addcart } from '../../contextapi/Cartcontext';
import { Link } from 'react-router-dom';

const Cartcard = ({ image, title, price, id }) => {
    const { increment, decrement, remove, cartitems } = useContext(Addcart);
    const item = cartitems.find(i => i.id === id);
    const qty = item ? item.qty : 0;

    return (
        <Link to ={`/productDetails/${id}`} >
        
        
        <div className='flex h-auto md:h-[180px] p-3 shadow rounded-lg w-full bg-white gap-3'>

            {/* Image */}
            <div className='w-[100px] md:w-[150px] shrink-0 bg-gray-50 flex items-center justify-center'>
                <img src={image} alt={title} className='w-full h-full object-contain rounded-md'/>
            </div>

            {/* Details */}
            <div className='flex flex-col justify-between flex-1 min-w-0 py-0.5'>
                <div>
                    <h2 className='text-[15px] md:text-[19px] font-semibold text-gray-900 line-clamp-2'>{title}</h2>
                    <p className='text-[14px] md:text-[15px] text-gray-800 mt-0.5'>${price}</p>
                </div>

                <div className='flex items-center justify-between w-full mt-2'>
                    {/* Qty controls */}
                    <div className='flex items-center border border-gray-200 overflow-hidden text-sm'>
                        <button onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            decrement(id)}}
                            className='px-2.5 py-1 text-[16px] hover:bg-gray-100 border-r border-gray-200'>
                            −
                        </button>
                        <span className='px-3 py-1 text-[16px] font-medium text-gray-800'>
                            {qty}
                        </span>
                        <button onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            increment(id)}}
                            className='px-2.5 py-1 text-[16px] hover:bg-gray-100 border-l border-gray-200'>
                            +
                        </button>
                    </div>

                    <button onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        remove(id)}}
                        className='text-red-800 hover:bg-red-50 p-1.5 rounded transition-colors'>
                        <FaRegTrashAlt size={17}/>
                    </button>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Cartcard;
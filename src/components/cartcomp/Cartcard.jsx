import React, { useContext } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { Addcart } from '../../contextapi/Cartcontext';

const Cartcard = ({ image, title, price, id }) => {
    const { increment, decrement, remove } = useContext(Addcart);

    // get live qty from cart state
    const { cartitems } = useContext(Addcart);
    const item = cartitems.find(i => i.id === id);
    const qty = item ? item.qty : 0;

    return (
        <div className='flex h-[180px] p-3 shadow rounded-lg w-full bg-white'>

            <div className='w-[150px] shrink-0 mr-4 bg-gray-50 flex items-center justify-center'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-contain rounded-md'
                />
            </div>

            <div className='flex flex-col justify-between flex-1 min-w-0 py-0.5'>
                <div>
                    <h2 className='text-[19px] font-semibold text-gray-900 truncate'>{title}</h2>
                    <p className='text-[15px] text-gray-800 mt-0.5'>${price}</p>
                </div>

                <div className='flex items-center justify-between w-full'>

                    <div className='flex items-center border border-gray-200 overflow-hidden text-sm'>
                        <button
                            onClick={() => decrement(id)}  
                            className='px-2.5 py-1 text-[16px] hover:bg-gray-100 border-r border-gray-200'
                        >
                            −
                        </button>
                        <span className='px-3 py-1 text-[16px] font-medium text-gray-800'>
                            {qty}
                        </span>
                        <button
                            onClick={() => increment(id)}
                            className='px-2.5 py-1 text-[16px] hover:bg-gray-100 border-l border-gray-200'
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={() => remove(id)}
                        className='text-red-800 hover:bg-red-50 p-1.5 rounded transition-colors'
                    >
                        <FaRegTrashAlt size={17} />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Cartcard;
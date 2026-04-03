import React, { useContext } from 'react'
import { Addcart } from '../../contextapi/Cartcontext'
import { IoCartOutline } from "react-icons/io5";
import Cartcard from './Cartcard'
import { Link } from 'react-router-dom';

const Cart = () => {

    let { cartitems, total_price } = useContext(Addcart)

    let subtotal = Number(total_price().toFixed(2))
    let discount = (0.10 * subtotal).toFixed(2)
    let delivery_fee = (subtotal > 100 || subtotal == 0) ? 0 : 50
    let total = (subtotal - discount + delivery_fee).toFixed(2)

    return (
        <section className='min-h-screen mx-14 mt-2'>
            <h1 className='text-[28px] font-semibold mb-8'>Your cart</h1>

            {cartitems.length !== 0 ? (
                <div className='flex w-full min-h-screen'>

                    {/* Left Section */}
                    <div className='left-section w-[65%] flex flex-col gap-5'>
                        {cartitems.map((item) => (
                            <Cartcard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        ))}
                    </div>

                    {/* Right Section — now correctly inside the flex container */}
                    <div className='right_section w-[35%] flex justify-center'>
                        <div>
                            <div className='w-[350px] shadow pt-2 px-4 flex flex-col justify-center gap-4 py-4'>
                                <h1 className='font-semibold'>Order summary</h1>

                                <div className='flex justify-between'>
                                    <h1>Subtotal</h1>
                                    <h1 className='font-semibold'>${subtotal}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Discount:(10%)</h1>
                                    <h1 className='font-semibold'>${discount}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Delivery fee</h1>
                                    <h1 className='font-semibold'>${delivery_fee}</h1>
                                </div>

                                <hr />

                                <div className='flex justify-between'>
                                    <h1>Total</h1>
                                    <h1 className='font-semibold'>${total}</h1>
                                </div>

                                <div className='flex justify-between my-2'>
                                    <input
                                        type="text"
                                        placeholder='enter coupon-code'
                                        className='px-1 border-1 outline-none'
                                    />
                                    <button className='font-semibold px-3 py-2 bg-black text-white rounded-2xl text-[14px]'>
                                        Apply
                                    </button>
                                </div>

                                <button className='bg-black text-white py-2 rounded-[3px] mt-2'>
                                    Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (<div className='flex flex-col items-center justify-center gap-4'>
                <IoCartOutline size={300} className='text-gray-400'/>
                <h1 className='text-2xl font-semibold'>Your cart is empty!</h1>
                <Link to="/home" className='text-blue-500 border-2 border-blue-500 py-2 px-3 font-semibold hover:text-white hover:bg-blue-500'>Shop now</Link>
            </div>
                
            )}

        </section>
    )
}

export default Cart
import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { Authcontext } from '../../../../contextapi/Contextapi';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { _Auth } from '../../../../Backend/Bass';
import { IoCartOutline } from "react-icons/io5";
import { Addcart } from '../../../../contextapi/Cartcontext';



const Menu = ({ search, setSearch }) => {


  let {cartcount} = useContext(Addcart)
  console.log(cartcount());
  
  let data = useContext(Authcontext)
  let thupleman = useNavigate()

  //console.log(data);


  async function handlelogout() {
    try {
      await signOut(_Auth)
      
    }
    catch (err) {
      toast.error(err.message)
      console.log(err);
    }
  }
 //console.log(data);
 
  //console.log(data?.displayName); optional chaining
 

  function validuser() {
    return (
      <>
          <section className='flex items-center gap-2'>
            <img className='w-8 rounded-full cursor-pointer' src={data?.photoURL} alt="" />
            <p>{data?.displayName}</p> 
          </section>
          <button onClick={handlelogout} className='hover:bg-blue-500 p-1.5 rounded-[5px] cursor-pointer'>Logout</button>
          <div className='flex '>
            <NavLink to="/cart" className={({isActive})=>
          isActive ? 'text-white':''}><IoCartOutline size={25} />  </NavLink>
          {cartcount() > 0? (<span className='relative top-[-6px] right-[10px] text-[10px] text-white border border-white bg-red-700 w-4 h-4 rounded-[50%] flex justify-center items-center'>{cartcount()}</span>) : ''}
          </div>
          
      </>
    )
  }

  //{(Object)=> console.log(object)   } 

  function invaliduser() {
    return (
      <>
        <NavLink to="/login" className={({isActive})=>
        isActive ? 'text-white border-white border-b-2 scale-100':'hover:bg-blue-500 p-1.5 rounded-[5px]'}>Login</NavLink>
        <NavLink to="/register" className={({isActive})=>
        isActive ? 'text-white border-white border-b-2 scale-100':'hover:bg-blue-500 p-1.5 rounded-[5px]'}>Register</NavLink>
      </>
    )
  }


  return (
    <>
      <div className='rght_nav flex gap-10 flex justify-center items-center '>
        <div className='flex justify-center items-center'>
          <CiSearch className='relative top-0 left-6' />
          <form action="">
            <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} className='px-7 border-none outline-0 bg-amber-50 rounded-2xl py-1 w-2xs font-semibold' />
          </form>
        </div>

        <NavLink  to="/home" className={({isActive})=>
        isActive ? 'text-white border-white border-b-2 scale-100':'hover:bg-blue-500 p-1.5 rounded-[5px]' }>Home</NavLink>
        {data ? validuser() : invaliduser()}
      </div>
    </>

  )
}

//'hover:bg-blue-500 p-1.5 rounded-[5px]'
export default Menu

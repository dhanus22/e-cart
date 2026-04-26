import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Authcontext } from '../../../../contextapi/Contextapi';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { _Auth } from '../../../../Backend/Bass';
import { IoCartOutline } from "react-icons/io5";
import { Addcart } from '../../../../contextapi/Cartcontext';

const MobileMenu = ({ setIsOpen }) => {
  let { cartcount, setcartitems } = useContext(Addcart)
  let data = useContext(Authcontext)
  let navigate = useNavigate()

  async function handlelogout() {
    try {
      await signOut(_Auth)
      setcartitems([])
      navigate("/home")
      setIsOpen(false)
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <NavLink to="/home" onClick={() => setIsOpen(false)}
        className={({isActive}) => isActive ? 'text-white border-white border-b-2 w-fit' : 'hover:bg-blue-500 p-1.5 rounded-[5px] w-fit'}>
        Home
      </NavLink>

      {data ? (
        <>
          <NavLink to="" onClick={() => setIsOpen(false)}
            className='hover:bg-blue-500 p-1.5 rounded-[5px] w-fit'>
            Profile
          </NavLink>
          <button onClick={handlelogout}
            className='hover:bg-blue-500 p-1.5 rounded-[5px] cursor-pointer w-fit'>
            Logout
          </button>
          <NavLink to="/cart" onClick={() => setIsOpen(false)}
            className={({isActive}) => isActive ? 'text-white w-fit' : 'w-fit'}>
            <div className='flex items-center gap-1'>
              <IoCartOutline size={25}/>
              {cartcount() > 0 && (
                <span className='text-[10px] text-white bg-red-700 w-4 h-4 rounded-full flex justify-center items-center'>
                  {cartcount()}
                </span>
              )}
            </div>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login" onClick={() => setIsOpen(false)}
            className={({isActive}) => isActive ? 'text-white border-white border-b-2 w-fit' : 'hover:bg-blue-500 p-1.5 rounded-[5px] w-fit'}>
            Login
          </NavLink>
          <NavLink to="/register" onClick={() => setIsOpen(false)}
            className={({isActive}) => isActive ? 'text-white border-white border-b-2 w-fit' : 'hover:bg-blue-500 p-1.5 rounded-[5px] w-fit'}>
            Register
          </NavLink>
        </>
      )}
    </>
  )
}

export default MobileMenu
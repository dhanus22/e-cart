import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Register from './Register'
import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { _Auth } from '../../../../Backend/Bass'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {

  let thupleman = useNavigate()

  
  
  let [showPassword, setShowPassword] = useState(false)
  

  function handleToggle(){
    setShowPassword(!showPassword)
  }
  

  let [state, setstate] = useState({
    username: "",
    password: ""
  })

  function handlelogin(e) {
    let { value, name } = e.target
    setstate({
      ...state,
      [name]: value
    })
  }

  async function handlingsubmit(e) {
    e.preventDefault()
    try {
      //let login = signInWithEmailAndPassword(_Auth, state.username, state.password)
      await signInWithEmailAndPassword(_Auth, state.username, state.password)
      // console.log(login);
      window.location.assign("/home") //TO reload the page
      toast.success("login successful")
      thupleman("/home")
    }
    catch(err){
      console.log(err);
      toast.error(err.message)
      setstate({
        ...state,
        username : "",
        password : ""
      }) 
    }
  }
  console.log(state);


  return (
    <section className='flex flex-col justify-center items-center mt-28'>
      <div className='flex flex-col justify-center items-center shadow-2xl rounded-2xl p-6 font-bold '>
        <h1 className='mb-5 text-blue-500 text-2xl'>Login</h1>
        <form action="" onSubmit={handlingsubmit} className='flex flex-col justify-center gap-2 text-[15px] tracking-wider '>

          <div className='flex flex-col text-[13px]'>
            <label htmlFor="">Username:</label>
            <input type="text" placeholder='username' className='rounded-[5px] h-9 w-[330px] font-light shadow pl-1'
              name="username" value={state.username} onChange={handlelogin} />
          </div>


          <div className='flex flex-col text-[13px]'>
            <label htmlFor="">Password:</label>
            <div className='flex'>
            <input type={showPassword ? "text" : "password"} placeholder='password' className=' rounded-[5px] h-9 w-[330px] font-light shadow pl-1'
              name='password' value={state.password} onChange={handlelogin} /> 
              <span className='flex justify-around items-center cursor-pointer' onClick={handleToggle}>
              {showPassword ? <FaRegEyeSlash size={20} className='absolute mr-10' /> : <FaRegEye size={18} className='absolute mr-10' />}
              </span>
            </div>
            
              
            <div className='flex justify-end'> <a href="" className='text-[12px] mt-1 font-semibold'>forgot password?</a>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center mt-4 w-full'>
            <button type="submit"
              className='bg-blue-400 w-full p-2 mt-4  text-[15px] font-bold rounded-[5px] hover:bg-blue-700 '>Login</button>
            <h2 className='text-[10px] mt-2'>Don't have account?
              <Link to="/register" className='text-blue-600'> Register here</Link></h2>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Login
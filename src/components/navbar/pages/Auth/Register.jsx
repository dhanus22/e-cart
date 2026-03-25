import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { _Auth } from '../../../../Backend/Bass'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Authcontext } from '../../../../contextapi/Contextapi'

const Register = () => {

  let thupleman = useNavigate()

  let data = useContext(Authcontext)

  let [showPassword, setShowPassword] = useState(false)

 


  function handleToggle() {
    setShowPassword(!showPassword)
  }


  let [state, setState] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: ""
  })

  let [submit, setSubmit] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: ""
  })

   

  function handlingform(e) {
    let { value, name } = e.target
    setState({
      ...state,
      [name]: value
    })
  }
  console.log(state);


  async function handlesubmit(e) {
    e.preventDefault()
    try {
      if (state.password === state.confirmPassword) {
        setSubmit(state)
        let { email, password } = state
        let firedata = await createUserWithEmailAndPassword(_Auth, email, password)
        console.log(firedata.user)

        //updateprofile
        await updateProfile(firedata.user, {
          displayName: state.username,
          photoURL: "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
        })

        // Send verification email
        await sendEmailVerification(firedata.user)
        toast.success("verification sent successfully")
        thupleman("/login")
      }
      else {
        console.log("Password missmatch");
      }
    }
    catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  }
   //console.log(state);

   

  return (
    <section className='flex justify-center items-center'>
      <Toaster />
      <div className='flex flex-col justify-center items-center mt-10  shadow-2xl rounded-2xl p-3'>
        <h1 className='text-2xl font-bold py-2 text-blue-500'>Registration Form</h1>

        <form onSubmit={(e) => handlesubmit(e)}
          className='flex flex-col gap-3  w-[330px] p-5 rounded-[15px] text-[13px] font-bold'>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="" className='inline'>Username: </label>
            <input type="text" placeholder='username' name='username' value={state.username}
              onChange={(e) => handlingform(e)} className='h-8 w-full shadow rounded-[3px] font-extralight px-1' />
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="">Email: </label>
            <input type="email" placeholder='email' name='email' value={state.email}
              onChange={(e) => handlingform(e)} className='h-8 w-full shadow rounded-[3px] font-extralight px-1' />
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="">Gender:</label>
            <div className='flex gap-1.5'>
              <input type="radio" name="gender" value="male" checked={state.gender === "male"}
                onChange={(e) => handlingform(e)} />
              <label htmlFor="">Male</label>

              <input type="radio" name="gender" value="female" checked={state.gender === "female"}
                onChange={(e) => handlingform(e)} />
              <label htmlFor="">Female</label>

              <input type="radio" name="gender" value="others" checked={state.gender === "others"}
                onChange={(e) => handlingform(e)} />
              <label htmlFor="">others</label>
            </div>
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="">Password: </label>
            <div className='flex'>
              <input type={showPassword ? "text" : "password"} name="password" placeholder='password' value={state.password}
                onChange={(e) => handlingform(e)} className='h-8 w-full shadow rounded-[3px] font-extralight px-1' />
              <span className='flex justify-around items-center cursor-pointer' onClick={handleToggle}>
                {showPassword ? <FaRegEyeSlash size={20} className='absolute mr-10' /> : <FaRegEye size={18} className='absolute mr-10' />}
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="">Re-enter password: </label>
            <div className='flex'>
              <input type={showPassword ? "text" : "password"} name="confirmPassword" placeholder='password' value={state.confirmPassword}
                onChange={(e) => handlingform(e)} className='h-8 w-full shadow rounded-[3px] font-extralight px-1' />
              <span className='flex justify-around items-center cursor-pointer' onClick={handleToggle}>
                {showPassword ? <FaRegEyeSlash size={20} className='absolute mr-10' /> : <FaRegEye size={18} className='absolute mr-10' />}
              </span>
            </div>
          </div>

          <button type="submit"
            className='bg-blue-400 p-2 mt-4  text-[15px] font-bold rounded-[5px] hover:bg-blue-700 '>Submit</button>
        </form>
      </div>
    </section>

  )
}

export default Register
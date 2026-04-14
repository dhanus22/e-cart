import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import toast from 'react-hot-toast'
import { _Auth } from '../../../../Backend/Bass'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

const Login = () => {
  const thupleman = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({ email: "", password: "" })

  function handleChange(e) {
    const { name, value } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(_Auth, state.email, state.password)
      toast.success("Login successful")
      thupleman("/home")                    //   window.location.assign is not needed
    } catch (err) {
      toast.error(err.message)
      setState(prev => ({ ...prev, password: "" }))   // only clear password, keep email
    } finally {
      setLoading(false)
    }
  }

  async function handleForgot(e) {
    e.preventDefault()
    if (!state.email) {
      toast.error("Enter your email first")
      return
    }
    try {
      await sendPasswordResetEmail(_Auth, state.email)
      toast.success("Password reset email sent!")
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <section className='flex flex-col justify-center items-center mt-28'>
      <div className='flex flex-col justify-center items-center shadow-2xl rounded-2xl p-6 font-bold'>
        <h1 className='mb-5 text-blue-500 text-2xl'>Login</h1>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-2 text-[15px] tracking-wider'>

          <div className='flex flex-col text-[13px]'>
            <label htmlFor="email">Email:</label>         
            <input
              id="email"
              type="email"                                 
              placeholder='email'
              className='rounded-[5px] h-9 w-[330px] font-light shadow pl-1'
              name="email"
              value={state.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className='flex flex-col text-[13px]'>
            <label htmlFor="password">Password:</label>    
            <div className='relative flex items-center'>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder='password'
                className='rounded-[5px] h-9 w-[330px] font-light shadow pl-1 pr-9' 
                name='password'
                value={state.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                className='absolute right-2 text-shadow-black'
                tabIndex={-1}                              
              >
                {showPassword
                  ? <FaRegEyeSlash size={18} />
                  : <FaRegEye size={18} />}
              </button>
            </div>

            <div className='flex justify-end'>
              <a
                href=""
                onClick={handleForgot}
                className='text-[12px] mt-1 font-semibold'
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center mt-4 w-full'>
            <button
              type="submit"
              disabled={loading}                        
              className='bg-blue-400 w-full p-2 mt-4 text-[15px] font-bold rounded-[5px] hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed'
            >
              {loading ? "Logging in..." : "Login"}       
            </button>
            <h2 className='text-[10px] mt-2'>
              Don't have an account?
              <Link to="/register" className='text-blue-600'> Register here</Link>
            </h2>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Login
import { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { _Auth } from '../../../../Backend/Bass'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [state, setState] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: ""
  })

  function handleChange(e) {
    const { name, value } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (state.password !== state.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setLoading(true)
    try {
      const { email, password } = state
      const firedata = await createUserWithEmailAndPassword(_Auth, email, password)

      await updateProfile(firedata.user, {
        displayName: state.username,
        photoURL: "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
      })

      await sendEmailVerification(firedata.user)
      toast.success("Verification email sent!")
      navigate("/login")
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-26 shadow-2xl rounded-2xl p-3'>
        <h1 className='text-2xl font-bold py-2 text-blue-500'>Registration Form</h1>

        <form onSubmit={handleSubmit}
          className='flex flex-col gap-3 w-[330px] p-5 rounded-[15px] text-[13px] font-bold'>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder='username'
              name='username'
              value={state.username}
              onChange={handleChange}
              autoComplete="username"
              className='h-8 w-full shadow rounded-[3px] font-extralight px-1'
            />
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder='email'
              name='email'
              value={state.email}
              onChange={handleChange}
              autoComplete="email"
              className='h-8 w-full shadow rounded-[3px] font-extralight px-1'
            />
          </div>

          <div className='flex flex-col gap-0.5'>
            <label>Gender:</label>
            <div className='flex gap-3'>
              <div className='flex items-center gap-1'>
                <input type="radio" id="male" name="gender" value="male"
                  checked={state.gender === "male"} onChange={handleChange} />
                <label htmlFor="male">Male</label>
              </div>
              <div className='flex items-center gap-1'>
                <input type="radio" id="female" name="gender" value="female"
                  checked={state.gender === "female"} onChange={handleChange} />
                <label htmlFor="female">Female</label>
              </div>
              <div className='flex items-center gap-1'>
                <input type="radio" id="others" name="gender" value="others"
                  checked={state.gender === "others"} onChange={handleChange} />
                <label htmlFor="others">Others</label>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="password">Password:</label>
            <div className='relative flex items-center'>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder='password'
                value={state.password}
                onChange={handleChange}
                autoComplete="new-password"
                className='h-8 w-full shadow rounded-[3px] font-extralight px-1 pr-8'
              />
              <button
                type="button"
                tabIndex={-1}
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(p => !p)}
                className='absolute right-2 text-gray-500'
              >
                {showPassword ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-0.5'>
            <label htmlFor="confirmPassword">Re-enter password:</label>
            <div className='relative flex items-center'>
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder='confirm password'
                value={state.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                className='h-8 w-full shadow rounded-[3px] font-extralight px-1 pr-8'
              />
              <button
                type="button"
                tabIndex={-1}
                aria-label="Toggle confirm password visibility"
                onClick={() => setShowConfirm(p => !p)}
                className='absolute right-2 text-gray-500'
              >
                {showConfirm ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className='bg-blue-400 p-2 mt-4 text-[15px] font-bold rounded-[5px] hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {loading ? "Registering..." : "Submit"}
          </button>

        </form>
      </div>
    </section>
  )
}

export default Register
import { Lock, Mail, User2Icon, Loader2 } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {
    const dispatch = useDispatch()
    //to get state from url search params
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    //give this state you fetched into the useState.
    const [state, setState] = React.useState(urlState ||"login")
    const [isLoading, setIsLoading] = React.useState(false)

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        // now we will be doing axios api call for login/registering the user 
        try {
            const {data} = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.msg)
        } catch (error) {
            toast.error(error?.response?.data?.msg || error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-50'>
        <form
            onSubmit={handleSubmit}
            className="sm:w-87.5 w-full text-center bg-white border border-slate-300/60 rounded-2xl px-8">
            <h1 className="text-slate-900 text-3xl mt-10 font-medium">
                {state === "login" ? "Login" : "Sign up"}
            </h1>

            <p className="text-slate-400 text-sm mt-2">Please {state} in to continue</p>

            {state !== "login" && (
                <div className="flex items-center mt-6 w-full bg-white border border-slate-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                    <User2Icon size={16} color='#6B7280'/>
                    <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-slate-400 border-none outline-none focus:ring-0 " value={formData.name} onChange={handleChange} required />
                </div>
            )}

            <div className="flex items-center w-full mt-4 bg-white border border-slate-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                <Mail size={16} color='#6B7280'/>
                <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-slate-900 placeholder-slate-400 border-none outline-none focus:ring-0 " value={formData.email} onChange={handleChange} required />
            </div>

            <div className=" flex items-center mt-4 w-full bg-white border border-slate-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                <Lock size={16} color ='#6B7280'/> 
                <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-slate-900 placeholder-slate-400 border-none outline-none focus:ring-0" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="mt-4 text-left">
                <button className="text-sm text-teal-400 hover:underline">
                    Forget password?
                </button>
            </div>

            <button disabled={isLoading} type="submit" className="mt-2 w-full h-11 flex items-center justify-center gap-2 rounded-full text-white bg-teal-600 hover:bg-teal-500 transition disabled:opacity-70 disabled:cursor-not-allowed" >
                {isLoading ? <Loader2 className="animate-spin size-5" /> : (state === "login" ? "Login" : "Sign up")}
            </button>

            <p onClick={() => setState(prev => prev === "login" ? "register" : "login") } className="text-slate-400 text-sm mt-3 mb-11 cursor-pointer" >
                {state === "login" ? "Don't have an account?" : "Already have an account?"}
                <span className="text-teal-400 hover:underline ml-1">click here</span>
            </p>
        </form>
    </div>
  )
}

export default Login

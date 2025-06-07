import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

function Login() {
    const [values,setValues] = useState({
        email:'',
        password: ''
    })
    const navigate = useNavigate()


    const handleChanges = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    } 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:5000/auth/login', values)
            if(response.status === 201){
              localStorage.setItem('token', response.data.token)
                navigate('/')
            }
        } catch(err){
            console.log(err.message)
        }
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              name='email'
              onChange={handleChanges}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              name='password'
              onChange={handleChanges}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            Don't have Account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">Signup</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

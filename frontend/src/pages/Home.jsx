import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const fetchUser = async () => {
  try{
    const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:5000/auth/home', {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      if(response.status != 201){
        navigate('/login')
      }
  } catch(err){
    navigate('/login')
    console.log(err)
  }
}

  useEffect( () => {
    fetchUser()
  }, [])
  return (
    <div className='text-3x1 text-blue-500'>
      Home
    </div>
  )
}

export default Home

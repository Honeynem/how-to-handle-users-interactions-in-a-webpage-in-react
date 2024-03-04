import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'


//sending query with token to api in header
axios.defaults.headers.common['token'] = localStorage.getItem('token')

const Dashboard = () => {
    useEffect(async()=>{
        const response = await axios.get('https://reqres.in/api/unknown')
        console.log(response)
    }, [])
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard

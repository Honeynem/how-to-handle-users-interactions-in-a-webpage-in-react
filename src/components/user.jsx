import axios from 'axios';
import React from 'react';
import { useEffect, useState, useRef } from 'react';


const User = (props) => {
    const [user, setUser] = useState({})
    const firstName = useRef(null)

    useEffect(async ()=>{
        const response = await axios.get (`https://reqres.in/api/users/${props.match.params.id}`)
        console.log(response)
        setUser(response.data.data)
        console.log(firstName.current)
    })

    
  return (
    <>
        <img src={user.avatar} style={{borderRadius : '50%', width: '100px'}} />
        <h4 ref={firstName}>{user.first_name} {user.last_name}</h4>
        <h5>{user.email}</h5>
    </>
  )
}

export default User;

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const User = (props) => {
    const [user, setUser] = useState({})

    useEffect(async ()=>{
        const response = await axios.get (`https://reqres.in/api/users/${props.match.params.id}`)
        console.log(response)
        setUser(response.data.data)
    })

    
  return (
    <>
        <img src={user.avatar} style={{borderRadius : '50%', width: '100px'}} />
        <h4>{user.first_name} {user.last_name}</h4>
        <h5>{user.email}</h5>
    </>
  )
}

export default User;

import React, { Component } from 'react';
import axios from 'axios';

class Users extends React.Component{
    state = {
        users : []
    }


    render(){
        return(
            <>
            <button className="btn btn-lg btn-primary"></button>
            <div className="row">
                {this.state.users.map((user)=>{
                    return (
                        <div className="col-4 text-center p-5">
                            <img src={user.avatar} style={{borderRadius : '50%', width: '100px'}} />
                            <h4>{user.first_name} {user.last_name}</h4>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }

}

export default Users;
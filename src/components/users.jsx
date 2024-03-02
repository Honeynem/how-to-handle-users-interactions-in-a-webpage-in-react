import React, { Component } from 'react';
import axios from 'axios';
import loadingUsers from './loding/loadingUsers';

class Users extends React.Component{
    state = {
        users : [],
        isLoading : true
    }

    async componentDidMount(){
        const response =  await axios.get('https://reqres.in/api/users')
        console.log(response)
        this.setState({users : response.data.data, isLoading: false})
    }

    render(){
        return(
            <>
            <button onClick={this.handleCreate} className="btn btn-lg btn-primary">Create</button>
            <div className="row">
                {
                    this.state.isLoading ? (
                         <loadingUsers />): (
                            this.state.users.map((user)=>{
                                return (
                                    <div className="col-4 text-center p-5">
                                        <img src={user.avatar} style={{borderRadius : '50%', width: '100px'}} />
                                        <h4>{user.first_name} {user.last_name}</h4>
                                        <h5>{user.email}</h5>
                                      
                                        <div className="row">
                                            <div className="col-6">
                                                <button onClick={()=> this.handleUpdate(user)} className='btn btn-info btn-sm'>Update</button>
                                            </div>
                                            <div className="col-6">
                                                <button onClick={()=> this.handleDelete(user)} className='btn btn-danger btn-sm'>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                }
               
            </div>
            </>
        )
    }

    handleCreate = async()=>{
        const newUser = {
            first_name: 'honey',
            last_name: 'nemani',
            email: 'hanienemani137@gmail.com',
            avatar: 'https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-profile_photograph-for-linkedin-1024x683.jpg'
        }

        const response = await axios.post('https://reqres.in/api/users' , newUser)
        this.setState({users: [...this.state.users, newUser]})

    }

    handleUpdate = async(user)=>{
        user.first_name = 'updated'
        const response = await axios.put(`https://reqres.in/api/users/${user.id}`, user)
        const updatedUsers = [...this.state.users]
        const index = updatedUsers.indexOf(user)
        updatedUsers[index] = {...user}
        this.setState({users: updatedUsers})

    }

    handleDelete = async(user)=>{
        await axios.delete(`https://reqres.in/api/users/${user.id}`)
        const newUsers = this.state.users.filter(u => u.id !== user.id)
        this.setState({users : newUsers})

    }

}

export default Users;
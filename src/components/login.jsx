import axios from 'axios'
import React, { Component } from 'react'

class Login extends React.Component {

    state={
        account: {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async(e)=>{
        e.preventDefault()
    }

    handleChange = (e)=>{
        const input = e.currentTarget
        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input oncChange ={this.handleChange} name='email' value={this.state.account.email} id='email' type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input oncChange ={this.handleChange} name='password' value={this.state.account.password} id='password' type="text" className='form-control' />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        )
    }
}

export default Login;
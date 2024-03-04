import axios from 'axios'
import React, { Component } from 'react'
import Input from './input'
import * as yup from 'yup'

class Login extends React.Component {

    state={
        account: {
            email: '',
            password: ''
        },
        errors: [],
        sending: false
    }

    validate = async()=>{
        try{
            const result = await this.schema.validate(this.state.account, {abortEarly: false})
            return result;

        } catch(error){
            console.log(error.errors)
            this.setState({})

        }
    }

    schema = yup.object().shape({
        email: yup.string().email('email format is not correct').required('email is required') ,
        password: yup.string().min(4, 'password must contain at least 4 character')
    })
    
    handleSubmit = async(e)=>{
        e.preventDefault()
        const result = await this.validate()
        if (result){
            try{
                this.setState({sending: true})
                const response = await axios.post('https://reqres.in/api/login', result)
                this.setState({sending: false})
            console.log(response)
            } catch(error){
                this.setState({sending: false})
                this.setState({errors: ['email or password is not correct']})

            }
        }
    }

    handleChange = (e)=>{
        const input = e.currentTarget
        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account})
    }

    render() {
        return (
            
            <>
            {
                this.state.errors.length !== 0 && (
                    <div className="alert alert-danager">
                    <ul>{
                        this.state.errors.map((e, i)=> <li key={i}>{e}</li>)

                    }
                    </ul>
                    </div>
                )
            }
            <form onSubmit={this.handleSubmit}>
                {/* <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input oncChange ={this.handleChange} name='email' value={this.state.account.email} id='email' type="text" className='form-control' />
                </div> */}
                {/* <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input oncChange ={this.handleChange} name='password' value={this.state.account.password} id='password' type="text" className='form-control' />
                </div> */}
                <Input name='email' value='email' label='Email'onChange={this.handleChange} />
                <Input name='password' value='password' label='Password' onChange={this.handleChange} />
                
                <button disabled={this.state.sending} className="btn btn-primary">Login</button>
            </form>
            </>
        )
    }
}

export default Login;
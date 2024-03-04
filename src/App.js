import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import User from './components/user';
import Dashboard from './components/dashboard';

class App extends React.Component {
    state = {
        user: null,
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(!token){
            this.setState({user: null})
            return;
            // the codes after this will not be executed
        }
        // we need an api that wen we send the token, server sends back the data refered to that user that the token is related to then we have to use this line of code but because we do not have it we manulay enter datas
        // const response = await axios.post('exampleapiifexistedforthismatter', {token})

        const response = {
            data: {
                user: {
                    name: 'honey',
                    email: 'honey@gmail.com'
                }
            }
        }

        if(!response.data.user){
            this.setState({user: null})
            return; 
        }

        this.setState({user: response.data.user})
    }





    render(){
        return <>
        <Navbar />
        <div className='container mt-3'>
            <Routes>
            <Route path='/users/:id' Component={User}/>    
            <Route path='/users' Component={Users} />
            <Route path='/login' Component={Login} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/register' Component={Register} />
            <Route path='/' Component={Home} />
            </Routes>
        </div>
        </>
    }
}

export default App;
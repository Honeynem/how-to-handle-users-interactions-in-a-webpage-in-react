import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

class App extends React.Component {
    render(){
        return <>
        <Navbar />
        <div className='container mt-3'>
            <Routes>
            <Route path='/users' Component={Users} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/' Component={Home} />
            </Routes>
        </div>
        </>
    }
}

export default App;
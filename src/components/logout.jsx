import React, { Component } from 'react'

class Logout extends React.Component(){

    //removing token from local storage
    componentDidMount(){
        localStorage.removeItem('token')
        window.location = './'
    }

    render(){
        return null;
    }
}

export default Logout;
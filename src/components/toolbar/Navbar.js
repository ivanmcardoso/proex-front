import React, { Component } from 'react'
import {history} from '../../history'
import './Navbar.scss'

class NavBar extends Component {
    
    render() {
        
        return (
            <>
                <nav className= "navbar">
                    <span className="nav-item" onClick={() => history.push('/')}> Home </span>
                    <span className="nav-item" onClick={() => history.push('/Pacients')}> Pacients </span>
                    <span className="nav-item"  onClick={() => {localStorage.clear(); history.push('/Login')}}> Logout </span>
                </nav>
            </>
            );
    }
}

export default NavBar
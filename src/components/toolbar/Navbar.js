import React, { Component } from 'react'
import {history} from '../../history'
import './Navbar.scss'

class NavBar extends Component {
    
    render() {
        
        return (
            <>
                <nav className= "navbar">
                    <div className="menu-item">
                    <span className="nav-item" onClick={() => history.push('/')}> Home </span>
                    <span className="nav-item" onClick={() => history.push('/Pacients')}> Pacients </span>
                    </div>
                    <div className="logout">
                    <span className="nav-item"  onClick={() => {localStorage.clear(); history.push('/Login')}}> Logout </span>
                    </div>
                </nav>
            </>
            );
    }
}

export default NavBar
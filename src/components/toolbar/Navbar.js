import React, { Component } from 'react'
import {history} from '../../history'
import Button from '@material-ui/core/Button';
import './Navbar.scss'

class NavBar extends Component {
    
    render() {
        
        return (
            <>
                <nav className= "navbar">
                    <div className="menu-item">
                    <Button className="nav-item" onClick={() => history.push('/')}> Inicio </Button>
                    <Button className="nav-item" onClick={() => history.push('/Pacients')}> Pacientes </Button>
                    <Button className="nav-item" onClick={() => history.push('/User')}> Usuários </Button>
                    </div>
                    <div className="logout">
                    <Button className="nav-item"  onClick={() => {localStorage.clear(); history.push('/Login')}}> Sair </Button>
                    </div>
                </nav>
            </>
            );
    }
}

export default NavBar
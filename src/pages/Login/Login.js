import React, {Component} from 'react'
import {history} from '../../history'

import './Login.scss'
import { API_PATH } from '../../enviroment';
import Axios from 'axios';

export default class Login extends Component {
    handleSubmit(event) {
        event.preventDefault();  
        var login = this.login.value;
        var senha = this.senha.value;
        
        Axios.post(`${API_PATH}/oauth/token`, null, {
            auth: {
                username: 'proex',
                password: '123'
              },
              params:{
                grant_type: 'password',
                username: login,
                password: senha
              }
        }).then((response) => {
            localStorage.setItem('auth-token', response.data.access_token)
            history.push('/')
        })
    }
    
    render(){
        return (
            <div className="login-form">
                <div className = "form-header">
                    <h1 className="title-text">PROEX</h1>
                </div>
                <div className = "form-content">
                    <form onSubmit={this.handleSubmit.bind(this)}> 
                            <input 
                                placeholder="Usuário"
                                className="input-text" 
                                type="text" 
                                ref={(input) => this.login = input}
                            />
                            <input 
                                placeholder="Senha"
                                className="input-text" 
                                type="password" 
                                ref={(input) => this.senha = input}
                            />

                        <button className = "button-submit" type="submit">ENTRAR</button>
                    </form>
                </div>
            </div>
        );
    }
}

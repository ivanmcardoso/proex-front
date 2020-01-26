import React, {Component} from 'react'
import {history} from '../../history'

import './Login.scss'
import { API_PATH } from '../../enviroment';

export default class Login extends Component {
    handleSubmit(event) {
        event.preventDefault();   

        const requestInfo = {
            method:'POST',
            body:JSON.stringify(
                {
                    username:this.login.value,
                    password:this.senha.value
                }),
            headers: new Headers({
                'Content-type':'application/json'
            })};
        fetch(`${API_PATH}/auth/singin`,requestInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw new Error();
            }
        }   
        )
        .then(response =>{
            localStorage.setItem('auth-token', response.token)
            history.push('/')
            
        })
        .catch(error =>{
        }
        )
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
                                type="text" 
                                ref={(input) => this.senha = input}
                            />

                        <button className = "button-submit" type="submit">ENTRAR</button>
                    </form>
                </div>
            </div>
        );
    }
}

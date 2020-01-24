import React, {Component} from 'react'
import {history} from '../../history'
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
        fetch('http://localhost:8080/auth/singin',requestInfo)
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
            history.push('/FootExam')
            
        })
        .catch(error =>{
        }
        )
    }
    
    render(){
        return (
            <>
                <h1>Login</h1>
                <p>Fill the fields to continue</p>
    
                    <form onSubmit={this.handleSubmit.bind(this)}> 
                        <div>
                            <input type="text" ref={(input) => this.login = input}/>
                        </div>
                        <div>
                            <input type="text" ref={(input) => this.senha = input}/>
                        </div>
                        <input type="submit" value="Login"/>
                    </form>
            </>
        );
    }
}

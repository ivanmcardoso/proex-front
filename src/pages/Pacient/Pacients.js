import React, { Component } from "react"
import Axios from "axios"

export default class Pacients extends Component {
    
    componentDidMount(){
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
        };
        
        Axios.get('http://localhost:8080/api/pacients', config)
        .then( res => {
            console.log(res.data);
            
        });

    }

    render(){
        return (
            <h1>Pacients</h1>
        )
    }
}
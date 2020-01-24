import React, { Component } from "react"
import Axios from "axios"

export default class FootExam extends Component {
    
    componentDidMount(){
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
        };
        
        Axios.get('http://localhost:8080/api/footExam', config)
        .then( res => {
            console.log(res.data);
        });

    }

    render(){
        return (
            <h1>Foot Exam</h1>
        )
    }
}
import React, { Component } from "react"
import {Router, Route, Switch } from "react-router"
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Register from '../pages/Register'
import { history } from '../history'
import NotFound from './NotFound'
import Pacients from '../pages/Pacient/Pacients'
import PrivateRoute from "./PrivateRoute"
import FootExam from "../pages/FootExam/FootExam"
import NavBar from "./toolbar/Navbar"
import User from "../pages/User/User"

const LoginContainer = () => {
    return(
        <Route component = {Login} exact path="/Login"/>
    )
}

const DefaultContainer = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route component = {Register} exact path="/Register"/>
                <PrivateRoute component = {Pacients}  path="/Pacients"/>
                <PrivateRoute component = {User}  path="/User"/>
                <PrivateRoute component = {FootExam}  path="/FootExam/:id"/>
                <PrivateRoute component = {Home} exact path="/"/>
                <Route component = {NotFound}/>
            </Switch>
        </>
        )
    }

export default class Routes extends Component {

    render() {
       return ( 
        <Router history = {history}>
                <Switch>
                <Route exact path="/Login" component={LoginContainer}/>
                 <Route component={DefaultContainer}/>
                </Switch>
            </Router>
        ); 
    }
}

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

export default class Routes extends Component {

    render() {
       return ( 
        <Router history = {history}>
                <Switch>
                    <Route component = {Login} exact path="/Login"/>
                    <Route component = {Register} exact path="/Register"/>
                    <PrivateRoute component = {Pacients}  path="/Pacients"/>
                    <PrivateRoute component = {FootExam}  path="/FootExam"/>
                    <PrivateRoute component = {Home} exact path="/"/>
                    <Route component = {NotFound}/>
                </Switch>
            </Router>
        ); 
    }
}

import React from 'react'
import {Router, Route, Switch } from "react-router"
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import { history } from '../history'
import NotFound from './NotFound'

const Routes = () => {
   return ( 
   <Router history = {history}>
        <Switch>
            <Route component = {Login} exact path="/Login"/>
            <Route component = {Register} exact path="/Register"/>
            <Route component = {Home} exact path="/"/>
            <Route component = {NotFound}/>
        </Switch>
    </Router>
    );
}

export default Routes
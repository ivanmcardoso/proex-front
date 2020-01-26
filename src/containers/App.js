import React, { Component } from 'react';
import './App.css';
import Routes from '../components/Routes';
import { Provider } from 'react-redux';
import { Store } from '../redux/store/store';
import 'typeface-roboto';

class App extends Component {
    render(){
        return (
        <>
            <Provider store = {Store}>
                <Routes/>
            </Provider>
        </>
        );
    }
}
export default App;

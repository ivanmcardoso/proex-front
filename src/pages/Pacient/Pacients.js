import React, { Component } from "react"
import {pacientsThunk} from '../../redux/thunks/pacientsThunk'
import { connect } from 'react-redux'

import './Pacients.scss'
import GenericTable from "../../components/generic-table/generic-table"

class Pacients extends Component {

    state = {
        pacients: []
    }

    componentDidMount(){
        const {getAll} = this.props;
        getAll();
    }
    
    render(){
        const header = ['id','nome','idade','cpf']
        
        return (
            <>
            <h1>Pacients</h1>
                <GenericTable header={header} data={this.props.pacients}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    pacients: state.PacientReducer.pacients
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(pacientsThunk.getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Pacients)
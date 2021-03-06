import React, { Component } from "react"
import {pacientsThunk} from '../../redux/thunks/pacientsThunk'
import { connect } from 'react-redux'

import './Pacients.scss'
import GenericTable from "../../components/generic-table/generic-table"
import { footExamThunk } from "../../redux/thunks/footExamThunk"

class Pacients extends Component {

    state = {
        pacients: []
    }

    componentDidMount(){
        const {getAll} = this.props;
        getAll();
    }
    
    render(){
        const header = [
        { title: 'Nome', field: 'name' },
        { title: 'Idade', field: 'age' },
        { title: 'Cpf', field: 'cpf' },
        ];

        const title = "Pacientes";
        
        return (
            <>
                <GenericTable
                    title = {title} 
                    header={header} 
                    data={this.props.pacients}
                    {...this.props}
                    />
            </>
        )
    }
}

const mapStateToProps = state => ({
    pacients: state.PacientReducer.pacients
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(pacientsThunk.getAll()),
    deleteById: (id) => dispatch(pacientsThunk.deleteById(id)),
    post: (data) => dispatch(pacientsThunk.post(data)),

    scheduleFootExam: (id) => dispatch(footExamThunk.post(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pacients)
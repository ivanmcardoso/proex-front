import React, { Component } from "react"
import {pacientsThunk} from '../../redux/thunks/pacientsThunk'
import { connect } from 'react-redux'

class Pacients extends Component {

    state = {
        pacients: []
    }

    componentDidMount(){
        const {getAll} = this.props;
        getAll();
    }

    renderTableData() {
        return this.props.pacients.map((pacient, index) => {
           const { id, name, age, cpf } = pacient 
           return (
              <tr key={id}>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{cpf}</td>
              </tr>
           )
        })
     }
  
  

    render(){
        const pacients = this.props.pacients;
        if(pacients !== undefined){
            pacients.forEach(element => {
                console.log(element.name);
            });

        }
        return (
            <>
            <h1>Pacients</h1>
            <table className="todo-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>cpf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderTableData()
                        }                        
                    </tbody>
                </table>
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
import React, { Component } from 'react'
import {userThunk} from '../../redux/thunks/userThunk'
import { connect } from 'react-redux'
import GenericTable from '../../components/generic-table/generic-table';

class User extends Component{

    state = {
        users: []
    }

    componentDidMount(){
        const {getAll} = this.props;
        getAll();
    }

    render(){
        
        const header = [
            { title: 'Nome', field: 'name' },
            { title: 'usuario', field: 'username' },
            { title: 'Email', field: 'email' },
            ];
    
            const title = "Usuários";
            
            return (
                <>
                    <GenericTable
                        title = {title} 
                        header={header} 
                        data={this.props.users}
                        {...this.props}/>
                </>
            )
    }
}

const mapStateToProps = state => ({
    users: state.UserReducer.users
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(userThunk.getAll()),
    deleteById: (id) => dispatch(userThunk.deleteById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
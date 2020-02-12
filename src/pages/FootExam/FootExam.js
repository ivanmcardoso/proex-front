import React, { Component } from "react"
import { connect } from 'react-redux'
import { footExamThunk } from "../../redux/thunks/footExamThunk";
import GenericTable from "../../components/generic-table/generic-table";

class FootExam extends Component {

    

    state = {
        footExams: []
    }

    componentWillMount(){
        const {getAll} = this.props;
        getAll(this.props.match.params.id);
    }

    render(){
        
        const header = [
            { title: 'ID', field: 'id' },
            { title: 'ultima atualização', field: 'dataChangeLastModifiedTime' },
            ];
    
        const title = "Exames";
     
        return (
            <GenericTable
            title = {title} 
            header={header} 
            data={this.props.footExams}
            {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    footExams: state.FootExamReducer.footExams
})

const mapDispatchToProps = dispatch => ({
    getAll: (id) => dispatch(footExamThunk.getAll(id)),
    post: (id) => dispatch(footExamThunk.post(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FootExam)
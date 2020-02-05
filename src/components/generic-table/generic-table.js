import React, { Component } from 'react';
import {history} from '../../history'
import MaterialTable from 'material-table';
import { tableIcons } from '../../utils/tableIcons';


export default class GenericTable extends Component {


  render(){

      var tooltip;
      if(this.props.pacients){
        tooltip = 'Listar Exames';
      }
      else {
        tooltip = 'Detalhes'
      }
    return (
      <MaterialTable
        icons = {tableIcons}
        title={this.props.title}
        columns={this.props.header}
        data={this.props.data} 
        options={{
          actionsColumnIndex: -1
        }}
        actions={[
          {
            icon: tableIcons.List,
            tooltip:  tooltip,
            hidden: !!this.props.users,
            onClick: (event, rowData) =>{
              if(!!this.props.pacients){
                history.push('/FootExam/'+rowData.id)
              } else if(!!this.props.footExams){
                alert(rowData.id)
              }
            } 
          },
          {
            icon: tableIcons.AddLine,
            tooltip: 'novo exame',
            hidden: !this.props.pacients,
            onClick: (event, rowData) => console.log(rowData.id)
          }
        ]}
        editable={{
          onRowDelete: oldData =>
          new Promise(resolve => {
            this.props.deleteById(oldData.id);
            resolve();
          }),
          onRowAdd: newData =>
          new Promise(resolve =>{
            if(this.props.users === undefined)
              this.props.post(newData);
            resolve();
          })
        }}         
      />
    );
  }
}

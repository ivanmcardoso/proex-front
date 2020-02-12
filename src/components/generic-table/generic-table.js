import React, { useState } from 'react';
import {history} from '../../history'
import MaterialTable from 'material-table';
import { tableIcons } from '../../utils/tableIcons';

import './generic-table.scss'
import ConfirmDialog from '../confirm-dialog/confirm-dialog'

const GenericTable = (props) => {

  const [open, setOpen] = useState(false);
  const [pacientId, setPacientId] = useState(0)
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (value,id) => {      
       if (value === 's'){
        console.log(id);
        props.scheduleFootExam(pacientId)
        
      }
      setOpen(false);
    };

    var tooltip;
    if(props.pacients){
      tooltip = 'Listar Exames';
    }
    else {
      tooltip = 'Detalhes'
    }
    

    return (
      <div className="table">
      <MaterialTable
        icons = {tableIcons}
        title={props.title}
        columns={props.header}
        data={props.data} 
        options={{
          actionsColumnIndex: -1
        }}
        actions={[
          {
            icon: tableIcons.List,
            tooltip:  tooltip,
            hidden: !!props.users,
            onClick: (event, rowData) =>{
              if(!!props.pacients){
                history.push('/FootExam/'+rowData.id)
              } else if(!!props.footExams){
                alert('novidades em breve')
              }
            } 
          },
          {
            icon: tableIcons.AddLine,
            tooltip: 'novo exame',
            hidden: !props.pacients,
            onClick: (event, rowData) => {
              setPacientId(rowData.id);
              handleClickOpen();
            }
          }
        ]}
        editable={{
          onRowDelete: oldData =>
          new Promise(resolve => {
            props.deleteById(oldData.id);
            resolve();
          }),
          onRowAdd: newData =>
          new Promise(resolve =>{
            if(props.users === undefined)
              props.post(newData);
            resolve();
          })
        }}         
      />
      <ConfirmDialog title={"Deseja marcar novo exame ?"} id={pacientId} contentText={""} open={open} onClose={handleClose} ></ConfirmDialog>
      </div>
    );
}

export default GenericTable

import React, { Component } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




export default class  GenericTable extends Component{
  
  createHeader(header){
    return header.map((column,index) => {
      return (
        <TableCell key={index}>{column}</TableCell>
      )
    })
  }

 createData(data) {
   
   try{
     return data.map((pacient) => {
      return (
         <TableRow key={pacient.id}>
           <TableCell component="th" scope="row">
             {pacient['id']}
           </TableCell>
           <TableCell component="th" scope="row">
             {pacient['name']}
           </TableCell>
           <TableCell >{pacient.age}</TableCell>
           <TableCell >{pacient.cpf}</TableCell>
         </TableRow>)
       })
   } catch{
      
   }
  }
  
  constructor(props){
    super();  
  }
  
  render(){
    const {header,data} = this.props;
        return (
          <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  {this.createHeader(header)}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.createData(data)}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }
  }


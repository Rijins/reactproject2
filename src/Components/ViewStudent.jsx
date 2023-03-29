import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStudent from './AddStudent'

const ViewStudent = () => {
  var[update,setUpdate]=useState(false)
  var[selected,setSelected]=useState([])
  var[students,setstudents]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/students")
    .then(response=>{
      setstudents(students=response.data)
      console.log(response.data)
    })
    .catch()
  },[])
  const updateValues=(value)=>{
    setSelected(value);
    setUpdate(true);
  }

  const deleteValues =(id)=>{
    console.log("delete clicked"+id)
    axios.delete("http://localhost:3000/students/"+id)
    .then(response=>{
      
      alert("succesfully deleted");
      window.location.reload(false);
    })
  }
  var finalJSX= <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Grade</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {students.map((value,index)=>{
        return <TableRow key={index}>
          <TableCell>{value.id}</TableCell>
          <TableCell>{value.name }</TableCell>
          <TableCell>{value.grade}</TableCell>
          <TableCell>
            <Button color='error' variant='contained' onClick={()=>deleteValues(value.id)}>Delete</Button>
          </TableCell>
          <TableCell>
            <Button color='success' variant='contained' onClick={()=>updateValues(value)}>Update</Button></TableCell>
        </TableRow>
      })}
    </TableBody>
  </Table>
</TableContainer>

if (update) 
finalJSX=<AddStudent data={selected} method="put"/>
  return (
    <div>
      <br />
      <br />
      <br />
      {finalJSX}
     
     
    </div>
  )
}

export default ViewStudent

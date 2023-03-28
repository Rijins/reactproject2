import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewStudent = () => {
  var[students,setstudents]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/students")
    .then(response=>{
      setstudents(students=response.data)
      console.log(response.data)
    })
    .catch()
  },[])

  const deleteValues =(id)=>{
    console.log("delete clicked"+id)
    axios.delete("http://localhost:3000/students/"+id)
    .then(response=>{
      
      alert("succesfully deleted");
      window.location.reload(false);
    })
  }
  return (
    <div>
      <br />
     
      <TableContainer>
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
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.grade}</TableCell>
                <TableCell>
                  <Button onClick={()=>deleteValues(value.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewStudent

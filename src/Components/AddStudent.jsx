import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddStudent = () => {
  var[input,setInput] = useState({
    name:'',
    grade:''
  })
  const inputHandler=(e)=>{
    const{name,value}=e.target
    setInput({...input,[name]:value})
  }
  const readvalues=()=>{
    console.log("clicked")
    axios.post("http://localhost:3000/students",input)
    .then(response=>{
      alert("success")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <TextField label='Name' name='name' value={input.name} variant="outlined" onChange={inputHandler}/>
      <br />
      <br />
      <TextField label='Email' name='grade' value={input.grade} variant="outlined" onChange={inputHandler}/>
      <br />
      <Button variant='contained'onClick={readvalues}>Submit</Button>
    </div>
  )
}

export default AddStudent

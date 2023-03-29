import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddStudent = (props) => {
  var[input,setInput] = useState(props.data)
  console.log("add.page.props"+props.data)


  const inputHandler=(e)=>{
    
    const{name,value}=e.target
    setInput({...input,[name]:value})
  }
  const readvalues=()=>{
    console.log("clicked")
    console.log(input);
    if (props.method === "post") {
      axios.post("http://localhost:3000/students",input)
      .then((response)=>{
        console.log("post data"+response.data)
        alert("success")
      })
      .catch((err) =>{
        console.log(err)
      })
    }else if (props.method === "put") {
      axios.put("http://localhost:3000/students/"+input.id,input)
      .then((response)=>{
        console.log("put data"+response.data)
        alert("success")
        window.location.reload(false);
      })
      .catch((err)=>{
        console.log(err)
      })
      
    }
  }
  return (
    <div>
      <TextField label='Name' name='name' value={input.name} variant="outlined" onChange={inputHandler}/>
      <br />
      <br />
      <TextField label='Grade' name='grade' value={input.grade} variant="outlined" onChange={inputHandler}/>
      <br />
      <Button variant='contained'onClick={readvalues}>Submit</Button>
    </div>
  )
}

export default AddStudent

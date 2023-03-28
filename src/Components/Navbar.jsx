import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
         
          <Typography  variant="h6" color="inherit" component="div">
            Student app
          </Typography>
          <Button  color='inherit'><Link to='/' style={{color:'white',textDecoration:'none'}}>View
            </Link></Button>
          <Button color='inherit'><Link to='/add' style={{color:'white',textDecoration:'none'}}>
            add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar

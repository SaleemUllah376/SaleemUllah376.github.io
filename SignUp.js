import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Age = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp = () => {
    function a(){
        alert("Your account has been created succesfully")

    }
    return (
        <div id="mainbox">
            {/* saleem
            <br/>
            <br/>
            <Button variant="contained">Contained</Button>
            <br/>
            Agree <Checkbox {...Age} defaultChecked />

            <br/>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Saleem</Button>
      <Button>Bilal</Button>
      <Button>Ali</Button>
    </ButtonGroup>
    <br/><br/> */}

    <center>
    
        <h1 id="heading1">SIGN UP PAGE</h1>

    <TextField id="filled-basic" label="User Name" variant="filled" /> <br/>
    <TextField id="filled-basic" label="User Email" variant="filled" /> <br/>
    <TextField id="filled-basic" label="User Password" variant="filled" /> <br/>
    I agree to terms and condition <Checkbox {...Age} defaultChecked /> <br/> <br/> 
    <Button variant="contained" onClick={a}>Sign Up</Button>
    
    </center>
     </div>
    )
}

export default SignUp

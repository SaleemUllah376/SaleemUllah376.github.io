import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignIn = () => {
    return (
        <div>
            <h1 id="heading1">Log In</h1>
            <TextField id="filled-basic" label="User Email" variant="filled" /> <br/>
            <TextField id="filled-basic" label="User Password" variant="filled" /> <br/> <br/>
            <Button variant="contained">Log In</Button>
            
        </div>
    )
}

export default SignIn

import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='loginRegisterDiv'>
    <div className="loginRegisterForm">
        <h2>Register</h2>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField type='password' id="standard-basic" label="Password" variant="standard" />
        <p className='errorP'>ERROR</p>
        <Button className='loginRegisterButton' variant='contained'>Register</Button>
        <Link to='/login'>Already have an account? Login</Link>
    </div>
</div>
  )
}

export default Register
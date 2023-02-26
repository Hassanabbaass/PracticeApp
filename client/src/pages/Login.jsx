import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginRegisterDiv'>
        <div className="loginRegisterForm">
            <h2>Login</h2>
            <TextField id="standard-basic" label="Username" variant="standard" />
            <TextField type='password' id="standard-basic" label="Password" variant="standard" />
            <p className='errorP'>ERROR</p>
            <Button className='loginRegisterButton' variant='contained'>Login</Button>
            <Link to='/register'>Dont have an account? Register.</Link>
        </div>
    </div>
  )
}

export default Login
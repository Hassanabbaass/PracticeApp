import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const students = [
    {
        id: 1,
        username: "user1",
        email: "user1@gmail.com",
    },
    {
        id: 2,
        username: "user2",
        email: "user2@gmail.com",
    },
    {
        id: 3,
        username: "user3",
        email: "user3@gmail.com",
    },
  ];

const Students = () => {
  return (
    <div className='tableDiv'>
        <div className='searchDiv'>
            <Link className='link' to='/courses'>
                <Button className='backbtn' variant='contained'>
                    <ArrowBackIosIcon/>
                </Button>
            </Link>
        </div>
        <h1>Students of Course</h1>
        <div className="searchDiv">
            <TextField id="outlined-basic" label="Search Student Email" variant="outlined" />
            <Button style={{backgroundColor: '#5c6bc0'}} variant='contained'>Enroll A Studnet</Button>
        </div>
    <TableContainer className='tableCon' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align='center'>Student ID</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Tools</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {students.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='center'>
                        {item.id}
                    </TableCell>

                    <TableCell align="center">
                        {item.username}
                    </TableCell>

                    <TableCell align="center">
                        {item.email}
                    </TableCell>

                    <TableCell align="center">
                        <Button color='error' className='tableBtn' variant='contained'>Un-Enroll Student</Button>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
    </Table>
    </TableContainer>
    </div>
  )
}

export default Students
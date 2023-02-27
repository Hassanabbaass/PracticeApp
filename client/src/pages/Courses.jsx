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
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const courses = [
    {
      id: 1,
      title: "Lorem ipsum",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: '2'
    },
    {
      id: 2,
      title: "Lorem ipsum",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: '1'
    },
    {
      id: 3,
      title: "Lorem ipsum",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: '4'
    },
    {
      id: 4,
      title: "Lorem ipsum",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      count: '2'
    },
  ];

const Courses = () => {

    const navigate = useNavigate();
    const handleGoTo = (id) => {
        navigate(`/students/${id}`)
    }

  return (
    <div className='tableDiv'>
        <h1>Courses</h1>
        <div className="searchDiv">
            <TextField id="outlined-basic" label="Search Course Name" variant="outlined" />
            <Button style={{backgroundColor: '#5c6bc0'}} variant='contained'><AddIcon/></Button>
        </div>
    <TableContainer className='tableCon' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align='left'>Course ID</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Number of students</TableCell>
                <TableCell align="left">Tools</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {courses.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell onClick={()=>handleGoTo(item.id)} className='clickableCell' component="th" scope="row">
                        {item.id}
                    </TableCell>

                    <TableCell onClick={()=>handleGoTo(item.id)} className='clickableCell' align="left">
                        <img className='imgTStyle' alt='' src={item.img}/>
                    </TableCell>

                    <TableCell onClick={()=>handleGoTo(item.id)}  className='clickableCell' align="left">
                        {item.title}
                    </TableCell>

                    <TableCell onClick={()=>handleGoTo(item.id)} className='clickableCell' style={{width: '40%'}} align="left">
                        {item.desc}
                    </TableCell>

                    <TableCell onClick={()=>handleGoTo(item.id)} className='clickableCell' align="left">
                        {item.count}
                    </TableCell>

                    <TableCell align="left">
                        <Button color='success' className='tableBtn' variant='contained'><EditIcon/></Button>
                        <Button color='error' className='tableBtn' variant='contained'><DeleteIcon/></Button>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Courses
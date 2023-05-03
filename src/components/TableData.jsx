import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const SimpleTable = () => {
    const rowsData = useSelector(state => state.soccer.footballInfo)
   
  

    return (
        <>
            <Typography variant="h3" component="h2" sx={{textAlign:"center"}} mt={3}>
                Countries Information
            </Typography>
            <TableContainer component={Paper} sx={{maxWidth:"80vw",margin:"auto",mt:2}}>
                <Table>
                    <TableHead sx={{background:"black"}}>
                        <TableRow >
                            <TableCell sx={{color:"white"}}>ID</TableCell>
                            <TableCell sx={{color:"white"}}>Name</TableCell>
                            <TableCell sx={{color:"white"}}>Capital</TableCell>
                            <TableCell sx={{color:"white"}}>currency</TableCell>
                            <TableCell sx={{color:"white"}}>population</TableCell>
                            <TableCell sx={{color:"white"}}>Phone</TableCell>
                            <TableCell sx={{color:"white"}}>flag</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.capital}</TableCell>
                                <TableCell>{row.currency}</TableCell>
                                <TableCell>{row.population}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell><img src={row.media.flag} alt="flag" style={{width:"20px"}} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default SimpleTable;
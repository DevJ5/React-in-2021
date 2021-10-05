import React from 'react';

// material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//types
import { Vehicle } from '../types/api';

export interface VehiclesProps {
  vehicles: Vehicle[] | undefined;
}

const Vehicles = ({ vehicles }: VehiclesProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">OwnerId</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Vehicles;

Vehicles.getInitialProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/vehicles');
    if (!response.ok) throw new Error('Something went wrong');
    const data: Vehicle[] | undefined = await response.json();
    return { vehicles: data };
  } catch (error) {
    console.log(error);
  }
};

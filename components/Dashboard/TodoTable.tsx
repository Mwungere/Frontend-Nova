import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { todos } from '@/constants';

export default function TodoTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-[#DAE3F8]'>
            <TableCell className=' font-body text-[#0B1C33]'>Activities</TableCell>
            <TableCell align="center" className=' font-body text-[#0B1C33]'>Date</TableCell>
            <TableCell align="right" className=' font-body text-[#0B1C33] '>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className=' font-body text-[#0B1C33] font-medium'>
                {row.activity}
              </TableCell>
              <TableCell align="center" className=' font-body text-[#0B1C33] font-medium'>{row.date}</TableCell>
              <TableCell align="right" className=' font-body text-[#0B1C33] font-medium'>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
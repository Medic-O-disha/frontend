import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Satyajit',13, 6.0, 24, 4.0),
  createData('Anshuman', 237, 9.0, 37, 4.3),
  createData('Bani', 262, 16.0, 24, 6.0),
  createData('Aryan', 305, 3.7, 67, 4.3),
  createData('SatyaPrakash', 356, 16.0, 49, 3.9),
];

 function TableU() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation = {20} >
      <Table className={classes.table} aria-label="simple table" elevation = {20}>
        <TableHead>
          <TableRow>
            <TableCell>Name Of The Needy </TableCell>
            <TableCell align="right">OxygenCylinders</TableCell>
            <TableCell align="right">Masks</TableCell>
            <TableCell align="right">Remdesivir</TableCell>
            <TableCell align="right">Sanitizers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default TableU ;
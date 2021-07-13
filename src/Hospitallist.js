import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, Sl, name, address, totalbeds, abeds) {
  return { id, Sl, name, address, totalbeds, abeds };
}

const rows = [
  createData(0, '1', 'SCB medical', 'Manglabag, Mangalabag, Cuttack, Odisha 753007', '10', 2),
  createData(1, '2', 'Ashwini Hospital (CDA)', 'Sector- 1, CDA CDA, Cuttack - 753014', '20', 5),
  createData(2, '3', 'Shanti Memorial Hospital Pvt. Ltd.', 'Patnaik Colony, Cuttack, Near Thoria Sahi Cuttack GPO, Cuttack - 753001', '30', 6),
  createData(3, '4', 'Star Hospital', 'Plot. 960, Rehaman Squre, College Squre to Jobra Anikat, Rehaman Chowk Jobra, Cuttack - 753003', '15', 1),
  createData(4, '5', 'Panda Curie Cancer Hospital', 'National Highway 5, Telengapentha Cuttack Gpo, Cuttack - 753001', '18', 4),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

 function Hospitallist () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title align = 'center' >HOSPITALS NEAR YOU </Title>
      <Table size="small" elevation = {20} >
        <TableHead>
          <TableRow>
            <TableCell elevation = {20}>Sl no.</TableCell>
            <TableCell elevation = {20}>Name</TableCell>
            <TableCell elevation = {20}>Address</TableCell>
            <TableCell elevation = {20}>Total No of Beds </TableCell>
            <TableCell elevation = {20} align="right">No. of Beds Available </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Sl}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.totalbeds}</TableCell>
              <TableCell align="right">{row.abeds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Hospitallist ;
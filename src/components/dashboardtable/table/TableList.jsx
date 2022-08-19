import React from 'react'
import tableListData from './TableData'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 650,
  },
  productwrap:{
    display: "flex",
    alignItems: "center"
  },
  image: {
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px"
  }
}))


function TableList() {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableListData.map((tabledata) => (
            <TableRow key={tabledata.id}>
              <TableCell>{tabledata.id}</TableCell>
              <TableCell>
                <div className={classes.productwrap}>
                  <img src={tabledata.img} alt="" className={classes.image} />
                  {tabledata.product}
                </div>
                
              </TableCell>
              <TableCell>{tabledata.customer}</TableCell>
              <TableCell>{tabledata.date}</TableCell>
              <TableCell>{tabledata.amount}</TableCell>
              <TableCell>{tabledata.method}</TableCell>
              <TableCell>{tabledata.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList
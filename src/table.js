import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(id, Floor_Number, Level_No, Created_Date, Modified_Date) {
  return { id, Floor_Number, Level_No, Created_Date, Modified_Date };
}

const rows = [
  createData(
    "592404de-dd9a-49f0-930c-ff7a9d4a8c9c",
    "First Floor",
    100,
    "2021-09-14T10:24:17.933418+05:30",
    "2021-09-14T10:24:17.933448+05:30"
  ),
  createData(
    "592404de-dd9a-49f0-930c-ff7a9d4a8c9d",
    "Second Floor",
    200,
    "2021-09-14T10:24:17.933418+05:30",
    "2021-09-14T10:24:17.933448+05:30"
  ),
  createData(
    "592404de-dd9a-49f0-930c-ff7a9d4a8c9e",
    "Third Floor",
    300,
    "2021-09-14T10:24:17.933418+05:30",
    "2021-09-14T10:24:17.933448+05:30"
  )
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Floor name</TableCell>
            <TableCell align="right">Floor Level</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right">Modified Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.Floor_Number}
              </TableCell>
              <TableCell align="right">{row.Level_No}</TableCell>
              <TableCell align="right">{row.Created_Date}</TableCell>
              <TableCell align="right">{row.Modified_Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { TransactionContext } from "../context/TransactionContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const { allTransactions, availableOptions } =
    React.useContext(TransactionContext);

  // console.log(allTransactions);

  return (
    <Container>
      <TableContainer component={Paper}>
        <h1>Available Options</h1>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Sender</StyledTableCell>
              <StyledTableCell align="right">Power Source</StyledTableCell>
              <StyledTableCell align="right">Amount of Power</StyledTableCell>
              <StyledTableCell align="right">Price/KWh</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Start</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {availableOptions?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.sender}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.powerSource}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.amountOfPower}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.pricePerKW}
                </StyledTableCell>
                <StyledTableCell align="right">{row.duration}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.timeToStart}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <h1>TRANSACTIONS</h1>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sender</StyledTableCell>
              <StyledTableCell align="right">Receiver</StyledTableCell>
              <StyledTableCell align="right">Amount of Power</StyledTableCell>
              <StyledTableCell align="right">Price/KWh</StyledTableCell>
              <StyledTableCell align="right">Total Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTransactions?.map((row, id) => (
              <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row">
                  {row.sender}
                </StyledTableCell>
                <StyledTableCell align="right">{row.receiver}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.amountOfPower}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.pricePerKW}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.parsedAmount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

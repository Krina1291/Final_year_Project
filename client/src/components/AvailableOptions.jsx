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
    //backgroundColor: theme.palette.common.black,
   // color: theme.palette.common.white,
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

  // console.log(allTransactions); border-white flex justify-center items-center
  //dummy data values
  return (
    <Container className="border-white flex justify-center items-center">
      <h1 className="flex text-3xl sm:text-5xl text-white">Available Options</h1>
      <br/>
      <TableContainer component={Paper}>
        {/*<h1>Available Options</h1>
        <h1 className="text-3xl sm:text-5xl">Available Options</h1>*/}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className="bg-gray-400">
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
          <TableRow>
              <StyledTableCell>0x70997970C51812dc3A010C7d01b50e0d17dc79C8</StyledTableCell>
              <StyledTableCell align="right">Account 6</StyledTableCell>
              <StyledTableCell align="right">Surat Dist</StyledTableCell>
              <StyledTableCell align="right">100</StyledTableCell>
              <StyledTableCell align="right">12</StyledTableCell>
              <StyledTableCell align="right">0.1</StyledTableCell>
              <StyledTableCell align="right">00.00</StyledTableCell>
            </TableRow>
          <TableRow>
              <StyledTableCell>0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc</StyledTableCell>
              <StyledTableCell align="right">Account 5</StyledTableCell>
              <StyledTableCell align="right">Surat Dist</StyledTableCell>
              <StyledTableCell align="right">100000</StyledTableCell>
              <StyledTableCell align="right">10</StyledTableCell>
              <StyledTableCell align="right">0.1</StyledTableCell>
              <StyledTableCell align="right">00.00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f</StyledTableCell>
              <StyledTableCell align="right">Account 4</StyledTableCell>
              <StyledTableCell align="right">Surat Dist</StyledTableCell>
              <StyledTableCell align="right">10000</StyledTableCell>
              <StyledTableCell align="right">100</StyledTableCell>
              <StyledTableCell align="right">0.1</StyledTableCell>
              <StyledTableCell align="right">00.00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>0xFABB0ac9d68B0B445fB7357272Ff202C5651694a</StyledTableCell>
              <StyledTableCell align="right">Account 3</StyledTableCell>
              <StyledTableCell align="right">Surat Dist</StyledTableCell>
              <StyledTableCell align="right">100000</StyledTableCell>
              <StyledTableCell align="right">5</StyledTableCell>
              <StyledTableCell align="right">0.1</StyledTableCell>
              <StyledTableCell align="right">00.00</StyledTableCell>
            </TableRow>
            
            
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
      <br/>       
      <h1 className="flex text-3xl sm:text-5xl text-white">Transactions</h1>
      <br/>
      <TableContainer component={Paper}>
        {/*<h1>TRANSACTIONS</h1>*/}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className="bg-gray-400">
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

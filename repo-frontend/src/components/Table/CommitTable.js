import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import { headerGenerator, rowGenerator } from "../../utility/DataGenerator";

const CommitTable = ({ data, headers }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, fontFamily: "Lato" }}
        aria-label="simple table"
      >
        <TableHead>{headerGenerator(headers)}</TableHead>
        <TableBody>{rowGenerator(data)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommitTable;

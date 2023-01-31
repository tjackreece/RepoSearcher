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
      <Table aria-label="simple table" className="commit-table">
        <TableHead>{headerGenerator(headers)}</TableHead>
        <TableBody>{rowGenerator(data)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommitTable;

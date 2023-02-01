import React from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  TableCell,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Back({ handleflip, name, fullName }) {
  const [commitData, setCommitData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCommitsForRepo = async (name) => {
    try {
      setIsLoading(true);
      const url = `https://api.github.com/repos/${name}/commits`;
      const response = await axios.get(url);
      setIsLoading(false);
      if (response.status === 200) {
        const formattedCommitData = response.data.map((data) => ({
          Title: data.commit.message,
          Username: data.author?.login || data.commit.author.name,
          Hash: data.sha,
          DateCreated: new Date(data.commit.author.date).toLocaleString(),
        }));
        setCommitData(formattedCommitData);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    (async () => {
      await getCommitsForRepo(fullName);
    })();
    return () => {};
  }, [fullName]);

  return (
    <Card
      key={name}
      className="card-container"
      sx={{ overflow: "auto", height: "auto" }}
      onClick={handleflip}
    >
      <CardContent>
        <Typography component="div" fontWeight="bold" gutterBottom variant="h5">
          {name}
        </Typography>
        <p>Commit Log</p>
        {isError && <h1>No commit data found</h1>}
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="simple table" className="commit-table">
              {renderTableHeader()}
              {renderTableBody(commitData)}
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
}

function getTableCellStyle(index) {
  return index === 0
    ? {
        fontWeight: "bold",
      }
    : {
        fontWeight: "bold",
        textAlign: "center",
      };
}

export const renderTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {["Title", "Username", "Hash", "Date Created"].map((head, i) => {
          return (
            <TableCell key={head + i} sx={getTableCellStyle(i)}>
              {head}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export const renderTableBody = (data) => {
  return data.map((el, i) => {
    return (
      <TableBody>
        <TableRow key={el.Title + i}>
          {Object.keys(el).map((commit, i) => (
            <TableCell
              key={el[commit]}
              align={i === 0 ? "left" : "center"}
              scope="row"
            >
              {commit === "DateCreated"
                ? new Date(el[commit]).toLocaleString()
                : el[commit]}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    );
  });
};

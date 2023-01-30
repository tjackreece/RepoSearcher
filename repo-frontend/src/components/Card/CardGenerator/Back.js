import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CommitTable from "../../Table/CommitTable";

const Back = ({ name, commitData, handleflip }) => {
  return (
    <Card
      key={name}
      className="card-container"
      sx={{ overflow: "auto", height: "auto" }}
      onClick={handleflip}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} - Commit Log
        </Typography>
        <CommitTable data={commitData} headers={Object.keys(commitData[0])} />
      </CardContent>
    </Card>
  );
};

export default Back;

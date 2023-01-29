import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CommitTable from "../../Table/CommitTable";

const Back = ({ name, commitData, flipped, handleflip }) => {
  return (
    <Card
      onClick={(e) => handleflip(e, name)}
      className={"card-container" + (flipped ? " flipped" : "")}
      key={name}
      sx={{
        width: "75%",
        height: "200px",
        padding: "5px",
        margin: ".1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
        fontFamily: "Lato",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} - Commit Log
        </Typography>
        <CommitTable data={commitData} headers={Object.keys(commitData[0])} />
        {/* {commitData.map((commit) => (
          <Typography variant="body2" color="text.secondary">
            {commit.Title}
          </Typography>
        ))} */}
      </CardContent>
    </Card>
  );
};

export default Back;

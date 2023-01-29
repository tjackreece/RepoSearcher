import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { FrontDetails } from "../../../utility/DataGenerator";
const Front = ({ name, repoDetails, flipped, handleflip }) => {
  return (
    <Card
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
      }}
      onClick={handleflip}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {repoDetails.repoName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {repoDetails.repoDescription}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          width: "100%",
          gap: "1.5rem",
          justifyContent: "center",
          margin: ".5rem auto",
        }}
      >
        {FrontDetails(repoDetails).map((detail) => (
          <Box style={{ display: "flex" }}>
            {detail.icon}
            {detail.detail}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Front;

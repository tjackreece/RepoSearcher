import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { FrontDetails } from "../../../utility/DataGenerator";
const Front = ({ name, repoDetails, handleflip }) => {
  return (
    <Card className={"card-container"} key={name} onClick={handleflip}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card-container__title"
        >
          {repoDetails.repoName}
        </Typography>
        <Typography variant="body2" className="card-container__des">
          {repoDetails.repoDescription}
        </Typography>
      </CardContent>
      <CardContent className="card-container__content">
        {FrontDetails(repoDetails).map((detail, i) => {
          return (
            <Box key={detail.key + i} className="card-container__content--box">
              {detail.icon}
              {detail.detail}
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Front;

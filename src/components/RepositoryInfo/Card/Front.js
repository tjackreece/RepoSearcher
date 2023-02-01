import React from "react";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardContent, Box, Typography } from "@mui/material";

export default function Front({ handleflip, name, repoDetails }) {
  return (
    <Card className={"card-container"} key={name} onClick={handleflip}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card-container__title"
        >
          {repoDetails.name}
        </Typography>
        <Typography variant="body2" className="card-container__des">
          {repoDetails.description || "No description found"}
        </Typography>
      </CardContent>
      <CardContent className="card-container__content">
        {getFrontDetailDisplays(repoDetails).map((detail, i) => {
          return (
            <Box key={i} className="card-container__content--box">
              {detail.icon}
              {detail.detail}
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
}

const languageColorMap = {
  "C++": "#f34b7d",
  "Jupyter Notebook": "#DA5B0B",
  C: "#555555",
  Go: "#00ADD8",
  Groovy: "#4298b8",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Kotlin: "#A97BFF",
  Python: "#3572A5",
  Scala: "#c22d40",
  Shell: "#000000",
  TypeScript: "#3178c6",
};

const getFrontDetailDisplays = (repoDetails) => {
  return [
    {
      detail: <Typography size="small"> {repoDetails.language}</Typography>,
      icon: (
        <span
          className="dot"
          style={{
            backgroundColor: languageColorMap[repoDetails.language] || "#fff",
            borderRadius: "50%",
            height: "15px",
            margin: "auto .5rem auto auto",
            width: "15px",
          }}
        />
      ),
    },
    {
      detail: (
        <Typography size="small"> {repoDetails.stargazers_count}</Typography>
      ),
      icon: (
        <StarIcon
          className="star"
          style={{
            color: "#ffe135",
            margin: "auto .2rem auto auto",
            stroke: "#ffe135",
          }}
        />
      ),
    },
    {
      detail: <Typography size="small"> {repoDetails.forks_count}</Typography>,
      icon: (
        <ForkRightIcon
          className="star"
          style={{
            margin: "auto .2rem auto auto",
          }}
        />
      ),
    },
    {
      detail: (
        <Typography size="small">
          {new Date(repoDetails.created_at).toLocaleString()}
        </Typography>
      ),
      icon: (
        <span
          style={{
            fontWeight: "bold",
            margin: "auto .5rem auto auto",
          }}
        >
          Date Created:
        </span>
      ),
    },
  ];
};

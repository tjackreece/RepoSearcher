import React from "react";
import CardMaker from "../Card";
import { Skeleton, Stack } from "@mui/material";

const RepositoryInfomation = ({
  repositories,
  isLoading,
  descendingOrder,
  handleSort,
}) => {
  if (isLoading) {
    return (
      <Stack display="flex">
        <Skeleton
          variant="rounded"
          width="75vw"
          height="33vh"
          animation="wave"
          sx={{ marginBottom: "1rem" }}
        />
      </Stack>
    );
  }
  return (
    <div className="repository">
      {repositories.map((element) => (
        <CardMaker
          key={element.repoName}
          repoDetails={element}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default RepositoryInfomation;

import React from "react";
import { Skeleton, Stack } from "@mui/material";

const LoadingState = () => {
  return (
    <Stack style={{ display: "flex", width: "100%", alignItems: "center" }}>
      {Array(7)
        .fill()
        .map(() => (
          <Skeleton
            variant="rounded"
            width="75vw"
            height="230px"
            animation="wave"
            sx={{ margin: "1rem auto .5rem" }}
          />
        ))}
    </Stack>
  );
};

export default LoadingState;

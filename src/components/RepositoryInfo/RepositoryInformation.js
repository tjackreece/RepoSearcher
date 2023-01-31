import React from "react";
import CardMaker from "../Card";
import LoadingState from "../LoadingState";

const RepositoryInfomation = ({ repositories, isLoading }) => {
  if (isLoading) {
    return <LoadingState />;
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

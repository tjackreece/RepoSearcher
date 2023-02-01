import React from "react";
import CardMaker from "./Card";
import LoadingState from "../LoadingState";

const RepositoryInfomation = ({ repositories, isIdle }) => {
  if (isIdle) {
    return <LoadingState />;
  }

  const getOrderedRepositories = () => {
    return repositories.sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
  };

  return (
    <div className="repository">
      {getOrderedRepositories().map((element) => (
        <CardMaker
          key={element.repoName}
          repoDetails={element}
          isLoading={isIdle}
        />
      ))}
    </div>
  );
};

export default RepositoryInfomation;

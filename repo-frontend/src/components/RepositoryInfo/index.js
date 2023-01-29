import React from "react";
import CardMaker from "../Card";

const RepositoryInfomation = ({ repositories }) => {
  // const repoDetails = {
  //   repo: repoName,
  //   language: repoLanguage,
  //   description: repoDescription,
  //   starCount: starCount,
  //   forkCount: forkCount,
  //   dateCreated: dateCreated,
  //   langColor: langColor,
  //   full_name: full_name,
  // };
  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        height: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {repositories.map((element) => (
        <CardMaker key={element.repoName} repoDetails={element} />
      ))}
    </div>
  );
};

export default RepositoryInfomation;

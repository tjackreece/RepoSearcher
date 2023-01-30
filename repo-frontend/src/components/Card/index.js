import { useEffect, useState } from "react";
import { getCommits } from "../../controller/controller";
import Back from "./CardGenerator/Back";
import Front from "./CardGenerator/Front";

export default function CardMaker({ repoDetails, isLoading }) {
  const [flipped, setFlipped] = useState(false);
  const [commitData, setCommitData] = useState([]);

  const handleflip = async () => {
    const formattedCommitData = [];
    const commitInfo = await getCommits(repoDetails.full_name);
    if (commitInfo.length > 0) {
      commitInfo.forEach((com) => {
        const { sha, commit, author } = com;
        formattedCommitData.push({
          Title: commit.message,
          Username: author?.login || commit.author.name,
          Hash: sha,
          DateCreated: new Date(commit.author.date).toLocaleString(),
        });
      });
    }
    setCommitData(formattedCommitData);
    setFlipped(!flipped);
  };
  const handleflipBack = () => {
    setFlipped(false);
  };
  useEffect(() => {
    if (commitData.length > 0) {
      setFlipped(true);
    }
  }, [commitData]);

  return (
    <>
      {flipped ? (
        <Back
          name={repoDetails.repoName}
          commitData={commitData}
          handleflip={handleflipBack}
        />
      ) : (
        <Front
          name={repoDetails.repoName}
          repoDetails={repoDetails}
          handleflip={handleflip}
        />
      )}
    </>
  );
}

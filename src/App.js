import { useEffect, useState } from "react";
import Navbar from "./components/Navigation";
import RepositoryInfomation from "./components/RepositoryInfo";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import axios from "axios";

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const getReposByOrganization = async (organizationName) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/orgs/${organizationName}/repos`
      );
      setIsLoading(false);
      if (response.status === 200) {
        setIsLoading(false);
        setRepos(response.data);
      } else {
        setIsError(true);
        return [];
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    (async () => {
      await getReposByOrganization("Netflix");
    })();
    return () => {};
  }, []);

  const resetDatabase = async () => {
    await getReposByOrganization("Netflix");
    setIsError(false);
    setIsLoading(false);
  };

  const renderErrorState = () => {
    return (
      <Alert
        action={
          <Button onClick={resetDatabase} color="inherit" size="small">
            RELOAD
          </Button>
        }
        severity="error"
      >
        Repository not found, please press the button to the right and try
        another repository.
      </Alert>
    );
  };

  const isIdle = isLoading || isError;
  return (
    <>
      <Navbar getReposByOrganization={getReposByOrganization} isIdle={isIdle} />
      {isError && renderErrorState()}
      <RepositoryInfomation repositories={repos} isIdle={isIdle} />
    </>
  );
}

export default App;

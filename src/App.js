import { useContext, useEffect, useState } from "react";
import { DatastoreContext } from "./context/DatastoreProvider";
import Navbar from "./components/Navigation/Navbar";
import RepositoryInfomation from "./components/RepositoryInfo/RepositoryInformation";
import { getRepository } from "./controller/controller";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

function App() {
  const { datastore, datastoreActions } = useContext(DatastoreContext);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    if (!datastore.datastoreLoading) {
      if (datastore.repos.length > 0) {
        setRepos(datastore.repos);
        setIsLoading(false);
      }
    }
  }, [datastore]);

  const handleSearch = (searchInput) => {
    const repoInfo = getRepository(searchInput);
    Promise.all([repoInfo]).then((values) => {
      if (values[0].length > 0) {
        datastoreActions.setRepo(values[0]);
        setIsLoading(false);
      } else {
        setNoResultsFound(true);
        setIsLoading(true);
      }
    });
  };
  const resetDatabase = () => {
    handleSearch("Netflix");
    setNoResultsFound(false);
    setIsLoading(true);
  };

  const handleNoResults = () => {
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
  return (
    <>
      <Navbar search={handleSearch} isLoading={isLoading} />
      {noResultsFound && handleNoResults()}
      <RepositoryInfomation repositories={repos} isLoading={isLoading} />
    </>
  );
}

export default App;

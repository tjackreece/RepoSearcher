import { useContext, useEffect, useState } from "react";
import { DatastoreContext } from "./context/DatastoreProvider";
import Navbar from "./components/Navigation/Navbar";
import RepositoryInfomation from "./components/RepositoryInfo/RepositoryInformation";
import { getRepository } from "./controller/controller";
import { sortedRepos } from "./utility/DataGenerator";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
function App() {
  const { datastore, datastoreActions } = useContext(DatastoreContext);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [descendingOrder, setDescendingOrder] = useState(true);
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    if (!datastore.datastoreLoading) {
      if (datastore.repos.length > 0) {
        setRepos(sortedRepos(datastore.repos, descendingOrder));
        setIsLoading(false);
      }
    }
  }, [datastore, descendingOrder]);

  const handleSort = () => {
    setIsLoading(true);
    setDescendingOrder(!descendingOrder);
    setIsLoading(false);
    setIsLoading(false);
  };

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
    setNoResultsFound(false);
    handleSearch("Netflix");
    setIsLoading(true);
  };

  const handleNoResults = () => {
    return (
      <Alert
        action={
          <Button onClick={resetDatabase} color="inherit" size="small">
            UNDO
          </Button>
        }
        severity="error"
      >
        This is an error alert — check it out!
      </Alert>
    );
  };
  return (
    <>
      {noResultsFound ? (
        handleNoResults()
      ) : (
        <>
          <Navbar search={handleSearch} isLoading={isLoading} />
          <RepositoryInfomation
            descendingOrder={descendingOrder}
            handleSort={handleSort}
            repositories={repos}
            isLoading={isLoading}
          />
        </>
      )}
    </>
  );
}

export default App;

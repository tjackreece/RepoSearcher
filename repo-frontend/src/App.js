import "./App.css";
import { useContext, useEffect, useState } from "react";
import { DatastoreContext } from "./context/DatastoreProvider";
import Navbar from "./components/Navigation/Navbar";
import RepositoryInfomation from "./components/RepositoryInfo/index";
import { getRepository } from "./controller/controller";

function App() {
  const { datastore, datastoreActions } = useContext(DatastoreContext);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!datastore.datastoreLoading) {
      setRepos(datastore.repos);
    }
  }, [datastore]);

  const handleSearch = (searchInput) => {
    const repoInfo = getRepository(searchInput);
    Promise.all([repoInfo]).then((values) => {
      datastoreActions.setRepo(values[0]);
      datastoreActions.setIsLoading(false);
    });
  };

  return (
    <div className="App">
      <Navbar search={handleSearch} />
      <RepositoryInfomation repositories={repos} />
    </div>
  );
}

export default App;

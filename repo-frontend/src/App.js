import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { DatastoreContext } from "./context/DatastoreProvider";
import Navbar from "./components/Navigation/index";
function App() {
  const { datastore } = useContext(DatastoreContext);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!datastore.datastoreLoading) {
      setRepos(datastore.repos);
    }
  }, [datastore.datastoreLoading, datastore.repos]);
  console.log(repos);
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

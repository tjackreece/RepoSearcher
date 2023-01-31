import { createContext, useReducer, useEffect, useMemo } from "react";
import { DatastoreReducer, initialState } from "./DatastoreReducer";
import { getRepository } from "../controller/controller";
export const DatastoreContext = createContext(initialState);

export default function DatastoreProvider({ children }) {
  const [datastore, dispatch] = useReducer(DatastoreReducer, initialState);
  const datastoreActions = useMemo(
    () => ({
      setRepo: (repositiory) =>
        dispatch({
          type: "SET_REPOSITORY",
          payload: { repositiory },
        }),
      setIsLoading: (isLoading) =>
        dispatch({
          type: "SET_ISLOADING",
          payload: { isLoading },
        }),
    }),
    [dispatch]
  );

  useEffect(() => {
    const repoInfo = getRepository("Netflix");
    Promise.all([repoInfo]).then((values) => {
      datastoreActions.setRepo(values[0]);
      datastoreActions.setIsLoading(false);
    });
  }, [datastoreActions]);

  const reducerValue = useMemo(
    () => ({
      datastore,
      datastoreActions,
    }),
    [datastore, datastoreActions]
  );
  return (
    <DatastoreContext.Provider value={reducerValue}>
      {children}
    </DatastoreContext.Provider>
  );
}

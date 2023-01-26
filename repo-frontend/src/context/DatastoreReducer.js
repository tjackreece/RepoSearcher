import { DataGenerator } from "../utility/DataGenerator";
const colorArray = [
  { name: "Java", color: "#b07219" },
  { name: "Go", color: "#00ADD8" },
  { name: "Python", color: "#3572A5" },
  { name: "Kotlin", color: "#A97BFF" },
  { name: "HTML", color: "#e34c26" },
  { name: "C", color: "#555555" },
  { name: "Scala", color: "#c22d40" },
  { name: "JavaScript", color: "#f1e05a" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "C++", color: "#f34b7d" },
  { name: "Jupyter Notebook", color: "#DA5B0B" },
  { name: "Groovy", color: "#4298b8" },
];

export const initialState = {
  organizationName: "Netflix",
  repos: [],
  colorArray,
  datastoreLoading: true,
};

export const DatastoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_REPOSITORY": {
      const { repositiory } = action.payload;
      return { ...state, repos: DataGenerator(repositiory, colorArray) };
    }
    case "SET_ISLOADING": {
      const { isLoading } = action.payload;
      return { ...state, datastoreLoading: isLoading };
    }
    default:
      return state;
  }
};

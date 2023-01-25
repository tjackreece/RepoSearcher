export const initialState = {
  repoName: "",
  language: "",
  description: "",
  starCount: "",
  forkCount: "",
  dateCreated: "",
  repos: [],
};

export const DatastoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_REPOSITORY": {
      const { repository } = action.payload;
      return { ...state, repos: repository };
    }
    default:
      return state;
  }
};

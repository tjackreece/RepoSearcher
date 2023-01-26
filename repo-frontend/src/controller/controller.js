import axios from "axios";
const BaseURL = "https://api.github.com/repos/";
export const getRepository = async (OrganizationName) => {
  const url = `https://api.github.com/orgs/${OrganizationName}/repos`;
  const targetURL = new URL(url);
  try {
    const response = await axios.get(targetURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLanguages = async (full_name) => {
  const url = `${BaseURL}${full_name}/languages`;
  const targetURL = new URL(url);
  try {
    const response = await axios.get(targetURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommits = async (full_name) => {
  const url = `${BaseURL}${full_name}/commits{/sha}`;
  const targetURL = new URL(url);
  try {
    const response = await axios.get(targetURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Repo name
// Language
// Description
// Star Count
// Fork Count
// Date Created
// Commit Title

// Committer username
// Commit hash
// Date Created

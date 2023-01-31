import axios from "axios";

const baseURL = "https://api.github.com/repos/";
export const getRepository = async (OrganizationName) => {
  const url = `https://api.github.com/orgs/${OrganizationName}/repos`;
  const targetURL = new URL(url);
  try {
    const response = await axios.get(targetURL);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const getLanguages = async (full_name) => {
  const url = `${baseURL}${full_name}/languages`;
  const targetURL = new URL(url);
  try {
    const response = await axios.get(targetURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommits = async (full_name) => {
  const url = `${baseURL}${full_name}/commits`;
  const targetURL = new URL(url);
  try {
    const response = await axios.get(targetURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

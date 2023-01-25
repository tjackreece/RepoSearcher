import axios from "axios";
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

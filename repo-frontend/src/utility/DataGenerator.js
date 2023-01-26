import { getLanguages } from "../controller/controller";

export const DataGenerator = (repoOBJ, colorArray) => {
  const repoFormattedData = [];

  repoOBJ.forEach(async (repo) => {
    const {
      name,
      language,
      description,
      stargazers_count,
      forks_count,
      created_at,
      full_name,
    } = repo;
    let repoName = "";
    if (name) {
      repoName = name;
    }

    let repoLanguage = "";

    if (language) {
      repoLanguage = language;
    } else {
      const Lang = await getLanguages(full_name).then((lang) =>
        Object.keys(lang).join(", ")
      );
      repoLanguage = Lang || null;
    }
    let repoDescription = "";

    if (description) {
      repoDescription = description;
    }

    let starCount = 0;
    if (stargazers_count) {
      starCount = stargazers_count;
    }
    let forkCount = 0;
    if (forks_count) {
      forkCount = forks_count;
    }
    let dateCreated = new Date(Date.now());
    if (created_at) {
      dateCreated = created_at;
    }
    const repoInfo = {
      repoName,
      repoLanguage,
      repoDescription,
      starCount,
      forkCount,
      dateCreated,
      langColor:
        colorArray.find((col) => col.name === language)?.color || "#000000",
    };
    repoFormattedData.push(repoInfo);
  });

  return repoFormattedData;
};

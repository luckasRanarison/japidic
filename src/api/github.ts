import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const api = applyCaseMiddleware(
  axios.create({ baseURL: "https://api.github.com" })
);

async function getRepoStats() {
  const res = await api.get("repos/luckasRanarison/japidic");
  const { stargazersCount, watchersCount, forksCount } = res.data;

  return {
    stargazers: stargazersCount,
    watchers: watchersCount,
    forks: forksCount,
  };
}

export { getRepoStats };

export default api;

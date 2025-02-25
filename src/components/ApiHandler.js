import axios from "axios";

export const getAnime = async () => {
  const dataAnime = await axios.get("https://kitsu.io/api/edge/anime");
  return dataAnime;
};

export const getAnimeById = async (id) => {
  const dataAnime = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
  return dataAnime;
};

export const trendingAnime = async () => {
  const dataAnime = await axios.get("https://kitsu.io/api/edge/trending/anime");
  return dataAnime;
};

export const searchAnime = async (query) => {
  const dataAnime = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
  return dataAnime;
};

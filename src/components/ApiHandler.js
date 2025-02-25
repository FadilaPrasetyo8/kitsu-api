import axios from "axios";

export const getAnime = async () => {
  const dataAnime = await axios.get(`${import.meta.env.VITE_PUBLIC_BASE_URL_API}/anime`);
  return dataAnime;
};

export const getAnimeById = async (id) => {
  const dataAnime = await axios.get(`${import.meta.env.VITE_PUBLIC_BASE_URL_API}/anime/${id}`);
  return dataAnime;
};

export const trendingAnime = async () => {
  const dataAnime = await axios.get(`${import.meta.env.VITE_PUBLIC_BASE_URL_API}/trending/anime`);
  return dataAnime;
};

export const searchAnime = async (query) => {
  const dataAnime = await axios.get(
    `${import.meta.env.VITE_PUBLIC_BASE_URL_API}/anime?filter[text]=${query}`
  );
  return dataAnime;
};

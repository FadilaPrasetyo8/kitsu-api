import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import { getAnime, searchAnime } from "../components/ApiHandler";
import ContentTop from "../components/ContentTop";

const ContentPages = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const { data } = await getAnime();
        setAnimes(data || []);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);

  const search = async (query) => {
    if (query.length > 3) {
      try {
        const { data } = await searchAnime(query);
        setAnimes(data.data || []);
      } catch (error) {
        setError("Failed to search anime.");
      }
    }
  };

  console.log(animes);

  const bgimage = animes[0]?.attributes?.coverImage?.original;

  return (
    <>
      <ContentTop search={search} bgimage={bgimage} />
      <Content animes={animes} loading={loading} error={error} />
    </>
  );
};

export default ContentPages;

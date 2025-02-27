import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import { getAnime, searchAnime } from "../components/ApiHandler";
import ContentTop from "../components/ContentTop";
import Footer from "../components/Footer";

const ContentPages = () => {
  const [animes, setAnimes] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPages = 10;
  const totalData = animes?.meta?.count;
  const totalPages = Math.ceil(totalData / perPages);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const { data } = await getAnime({ pages: currentPage, perpages: perPages });
        setAnimes(data || []);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnime();
  }, [currentPage]);

  console.log(animes);

  const search = async (query) => {
    if (query.length > 3) {
      try {
        const { data } = await searchAnime(query);
        setAnimes(data || []);
      } catch (error) {
        setError("Failed to search anime.");
      }
    }
  };

  const bgimage = animes?.data[0]?.attributes?.coverImage?.original;

  return (
    <>
      <ContentTop search={search} bgimage={bgimage} />
      <Content animes={animes} loading={loading} error={error} />
      <Footer
        animes={animes}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default ContentPages;

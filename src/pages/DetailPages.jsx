import React, { lazy } from "react";
import { Global } from "../components/styles/Global";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../components/ApiHandler";
import Loading from "../components/Loading";
import { CardContainer } from "../components/styles/Detail.styled";

const DetailPages = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);

  const [detailAnime, setDetailAnime] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnimeById(id);
        setDetailAnime(response.data.data.attributes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <Loading />
      </div>
    );
  return (
    <>
      <Global />
      <Detail detailAnime={detailAnime} />
    </>
  );
};

export default DetailPages;

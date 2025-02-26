import React from "react";
import {
  Button,
  ButtonGroup,
  CardContainer,
  ContainerContent,
  Description,
  ImageWrapper,
  LinkButton,
  Title,
} from "./styles/Content.styled";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Content = ({ animes, loading, error }) => {
  if (loading)
    return (
      <ContainerContent>
        <Loading />
      </ContainerContent>
    );
  if (error) return <p>Error loading data.</p>;

  return (
    <ContainerContent>
      {animes?.data?.length > 0 ? (
        animes?.data?.map((item) => (
          <CardContainer key={item.id}>
            <ImageWrapper>
              <img
                src={item?.attributes?.posterImage?.medium || "https://via.placeholder.com/300x180"}
                alt={item?.attributes?.titles?.en || "Anime Image"}
              />
            </ImageWrapper>

            <Title>{item?.attributes?.titles?.ja_jp || "Untitled Anime"}</Title>
            <Title>{item?.attributes?.titles?.en || "Untitled Anime"}</Title>

            <Description>
              {item?.attributes?.synopsis
                ? item.attributes.synopsis.substring(0, 200) + "..."
                : "No synopsis available."}
            </Description>

            <ButtonGroup>
              <LinkButton to={`/${item.id}`} variant="details">
                View Details
              </LinkButton>
              <Button>Add to Watchlist</Button>
            </ButtonGroup>
          </CardContainer>
        ))
      ) : (
        <p>No anime found.</p>
      )}
    </ContainerContent>
  );
};

export default Content;

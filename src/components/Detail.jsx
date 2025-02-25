import React from "react";
import {
  CardContainer,
  Poster,
  InfoSection,
  Title,
  Ratings,
  Overview,
  MetaData,
} from "./styles/Detail.styled";
import { CoverBgTop } from "./styles/ContentTop.styled";

const Detail = ({ detailAnime }) => {
  return (
    <>
      <CoverBgTop
        bgImage={detailAnime?.coverImage?.original}
        heightAfter="100vh"
        heightBefore="100vh"
      />
      <CardContainer>
        <Poster src={detailAnime?.posterImage?.original} alt={detailAnime?.canonicalTitle} />
        <InfoSection>
          <Title>{detailAnime?.titles?.ja_jp}</Title>
          <Title>{detailAnime?.titles?.en}</Title>

          <Ratings>
            ⭐ {detailAnime?.averageRating} ({detailAnime?.favoritesCount})
          </Ratings>

          <Overview>{detailAnime?.synopsis}</Overview>

          <MetaData>
            <div>
              <p>
                <strong>Released Date:</strong> {detailAnime?.startDate}
              </p>
            </div>
          </MetaData>
        </InfoSection>
      </CardContainer>
    </>
  );
};

export default Detail;

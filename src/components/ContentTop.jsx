import React from "react";
import {
  CardSearch,
  ContainerCard,
  CoverBgTop,
  Headers,
  InputSearch,
} from "./styles/ContentTop.styled";

const ContentTop = ({ search, bgimage }) => {
  return (
    <>
      <CoverBgTop bgImage={bgimage} heightAfter="100vh" heightBefore="100vh" />
      <ContainerCard>
        <CardSearch>
          <Headers>Find Movies, TV shows and more</Headers>
          <InputSearch
            onChange={(e) => console.log(search(e.target.value))}
            type="text"
            placeholder="Search for movies and tv shows..."
          />
        </CardSearch>
      </ContainerCard>
    </>
  );
};

export default ContentTop;

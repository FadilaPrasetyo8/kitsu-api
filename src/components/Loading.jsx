import React from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <ClipLoader />
    // <ContainerLoading>
    // </ContainerLoading>
  );
};

export default Loading;

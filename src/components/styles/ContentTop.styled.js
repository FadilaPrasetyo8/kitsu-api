import styled from "styled-components";

export const CoverBgTop = styled.div`
  color: black;
  height: 50%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;

  /* Overlay gelap dan gradient fade bawah */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, white 100%);
    z-index: 0;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const CardSearch = styled.div`
  background-color: rgba(63, 111, 167, 0.7); /* 0.7 = 70% visible, 30% transparent */
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  padding: 40px;
  text-align: center;
  max-width: 800px;
  width: 90%;
  z-index: 1;
`;

export const Headers = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-size: 36px;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  text-align: center;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
`;

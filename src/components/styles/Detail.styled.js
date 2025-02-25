import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  margin: 50px auto;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    margin: 20px;
  }
`;

export const Poster = styled.img`
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const InfoSection = styled.div`
  margin-left: 20px;
  flex: 1;
  color: #333;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 8px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Ratings = styled.div`
  font-size: 1.1rem;
  margin: 8px 0;
`;

export const Overview = styled.p`
  line-height: 1.6;
  margin: 10px 0;
  text-align: justify;
`;

export const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const GenreTag = styled.span`
  background-color: #e5e5e5;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 8px;
  display: inline-block;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const NetworkLogo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

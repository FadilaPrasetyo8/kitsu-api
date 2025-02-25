import styled from "styled-components";

export const TopbarContainer = styled.div`
  color: white;
  padding: 20px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const NavigationLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: linear-gradient(90deg, #ff7e5f, #feb47b);
  margin: 0;
`;

export const Search = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export const Headerss = styled.h1`
  color: white;
  text-align: center;
`;

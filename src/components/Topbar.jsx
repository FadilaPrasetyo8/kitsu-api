import React from "react";
import { Image, Logo, Nav, NavigationLink, Search, TopbarContainer } from "./styles/Header.styled";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledCard } from "./styles/Card.styled";

const Topbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <TopbarContainer>
      <Container>
        <Nav>
          <Logo>My App</Logo>
          <Search placeholder="Search..." />
        </Nav>
        <Flex></Flex>
      </Container>
    </TopbarContainer>
  );
};

export default Topbar;

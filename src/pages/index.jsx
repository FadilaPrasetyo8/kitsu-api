import React from "react";
import { ThemeProvider } from "styled-components";
import { lazy } from "react";
import { Global } from "../components/styles/Global";

const theme = {
  mobile: "768px",
};

const ContentPagess = lazy(() => import("../pages/ContentPages"));

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <ContentPagess />
    </ThemeProvider>
  );
};

export default Home;

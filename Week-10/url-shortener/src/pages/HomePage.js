import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";
import HomePageArticle from "../components/HomePageArticle";
import Footer from "../components/Footer";

const HomePageContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
      overflow: hidden;
    `}
`;

const CircularProgressStyled = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
`;
const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <HomePageContainer isLoading={isLoading}>
      <Navbar />
      <HomePageArticle setIsLoading={setIsLoading} />
      {isLoading && <CircularProgressStyled />}
      <Footer />
    </HomePageContainer>
  );
};

export default Homepage;

import styled from "styled-components";
import React from "react";
import bg from "../assets/home-background.png";
import ImgSlider from "./ImgSlider";
export const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${bg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

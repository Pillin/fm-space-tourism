import React from "react";
import styled from "@emotion/styled";
import HomeCard from "../components/HomeCard";
import { IMG } from "../components/core/Image";
import TextCircle from "../components/ExploreCircle"

const Container = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 1240px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 36px 72px 36px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return <Container>
    <IMG
      mobile="/assets/home/background-home-mobile.jpg"
      tablet="/assets/home/background-home-tablet.jpg"
      desktop="/assets/home/background-home-desktop.jpg"
      alt="Home space"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100vw",
        left: "0px",
        top: "0px",
        aspectRatio: "1080 / 920"
      }} />
    <HomeCard />
    <TextCircle text="Explore" url="" />
  </Container>
};


export default Home;

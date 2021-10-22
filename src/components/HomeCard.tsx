import React from "react";
import styled from "@emotion/styled";
import { H1, P, SubHeadingOne } from "./core/Typography"

const Container = styled.section`
  max-width: 450px;
`;

const HomeCard = () => {
  return <Container>
    <SubHeadingOne>
      SO, YOU WANT TO TRAVEL TO
    </SubHeadingOne>
    <H1>SPACE</H1>
    <P>
      Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</P>
  </Container>
};


export default HomeCard;
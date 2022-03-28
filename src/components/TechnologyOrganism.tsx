import React from "react";
import styled from "@emotion/styled";
import { H3, P } from "./core/Typography";


const Container = styled.section<{ isActive: boolean }>`
  max-width: 445px;
  width: 100%;
  display: ${({ isActive }) => isActive ? "block" : "none"};
`;


const TechnologyOrganism = (props: {
  description: string;
  name: string;
  isActive: boolean;
}) => {
  return <Container isActive={props.isActive}>
    <H3>{props.name}</H3>
    <P>{props.description}</P>
  </Container>
}

export default TechnologyOrganism;
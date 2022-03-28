import React from "react";
import styled from "@emotion/styled";
import { H3, H4, P } from "./core/Typography";


const Container = styled.section<{ isActive: boolean }>`
  max-width: 445px;
  width: 100%;
  display: ${({ isActive }) => isActive ? "block" : "none"};
`;


const DetailOrganism = (props: {
  role: string;
  bio: string;
  name: string;
  isActive: boolean;
}) => {
  return <Container isActive={props.isActive}>
    <H4>{props.role}</H4>
    <H3>{props.name}</H3>
    <P>{props.bio}</P>
  </Container>
}

export default DetailOrganism;
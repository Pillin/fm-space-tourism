import React from "react";
import styled from "@emotion/styled";
import { H2, P, SubHeadingOne, SubHeadingTwo } from "./core/Typography";


const Container = styled.section<{ isActive: boolean }>`
  max-width: 445px;
  width: 100%;
  display: ${({ isActive }) => isActive ? "block" : "none"};

`;

const Line = styled.hr`
  width: 100%;
`

const Square = styled.section``;


const Metric = (props: { title: string, value: string }) => <Square>
  <SubHeadingTwo>{props.title}</SubHeadingTwo>
  <SubHeadingOne>{props.value}</SubHeadingOne>
</Square>;


const DetailOrganism = (props: {
  distance: string;
  description: string;
  travel: string;
  name: string;
  isActive: boolean;
}) => {
  return <Container isActive={props.isActive}>
    <H2>{props.name}</H2>
    <P>{props.description}</P>
    <Line />
    <Metric title="avg. distance" value={props.distance} />
    <Metric title="est. travel time" value={props.travel} />
  </Container>
}

export default DetailOrganism;
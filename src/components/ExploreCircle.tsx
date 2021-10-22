
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    content: " ";
    width: calc(274px + 176px);
    height: calc(274px + 176px);
    background: transparent;
    &:hover {
      background: #9797973b;
    }

    transition: background 1s ease-out;

    @media (max-width: 600px) {
      width: calc(150px + 126px);
      height: calc(150px + 126px);
    }
  `;

const LinkStyled = styled(Link)`
  border-radius: 50%;
  background: white;
  height: 274px;
  width: 274px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  letter-spacing; 2px;
  color: #0B0D17;
  font-family: 'Bellefair', serif;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
`;

const TextCircle = (props: { text: string, url: string }) => {
  return <Container><LinkStyled to={props.url}>
    {props.text}
  </LinkStyled></Container>
};

export default TextCircle;
import React from "react";
import {

  useLocation
} from "react-router-dom"
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const Container = styled.section`
  position: fixed;
  z-index: 4;
  width: 100vw;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  padding: 0px 0px 0px 80px;

  @media (max-width: 768px){
    padding: 0px 0px 0px 32px;
  }
`;

const Icon = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: white;
  position: relative;
  &::before {
    content: " ";
    position: absolute;

  }
`;

const Line = styled.div`
  max-width: 430px;
  width: 100%;
  height: 1px;
  background-color: #979797;

  @media (max-width: 768px){
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 830px;

  ul {
    margin: 0px;
    padding: 0px;
  }

  li {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }


`;

export const NavText = styled(Link) <{ isActive?: boolean }>`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  padding: 32px 8px;
  gap: 12px;
  text-decoration: none;
  display: flex;
  border-width: 0px 0px 2px 0px;
  border-color: ${({ isActive }) => isActive ? "white" : "transparent"};
  border-style:  solid;

  > span:nth-of-type(1) {
    font-weight: 600;
  }

  &:hover {
    border-color: #979797;
  }

`;

const urls = [{
  name: "00 HOME",
  url: "/"
}, {
  name: "01 DESTINATION",
  url: "/destination"
}, {
  name: "03 crew",
  url: "/crew"
}, {
  name: "04 technology",
  url: "/technology"
},
]

const NavBar = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  return <Container>
    <Icon />
    <Line />
    <Nav>
      {urls.map((elem, index) =>
        <ul key={`nav-${index}`}>
          <li>
            <NavText to={elem.url} isActive={pathname === elem.url}>
              {elem.name.split(" ").map((elem, index) => <span key={`nav-${index}`}>{elem}</span>)}
            </NavText></li>
        </ul>
      )}
    </Nav>
  </Container >
};


export default NavBar;
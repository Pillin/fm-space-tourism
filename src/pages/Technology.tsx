import React, { useState } from "react";
import styled from "@emotion/styled";
import TechnologyOrganism from "../components/TechnologyOrganism";
import { technology } from "../data.json";
import { IMG } from "../components/core/Image";
import Title from "../components/Title";


const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 100hv;
  max-height: 100hv;
  max-width: 1440px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0px 160px;
  padding: 120px 0px 0px 0px;

  @media(max-width: 769px) {
    overflow: scroll;
  }
`;


const Column = styled.section`
  display: flex;
  flex-direction: column;
`;

const Tabs = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  gap: 0px 16px;
`;

const Tab = styled.button<{ isActive: boolean }>`
  background: transparent;
  color: white;
  text-transform: uppercase;
  background-color: ${({ isActive }) => isActive ? "#FFFFFF" : "#979797"};
  width: 15px;
  height: 15px;
  border-style: solid;
  border: 0px;
  border-radius: 50%;
`;

const Content = styled.section`position: relative;`;



const Technology = () => {
  const [show, setShow] = useState(0);

  return <Container>
    <Title number={"03"} description={"SPACE LAUNCH 101"} />
    <Column>
      <Tabs>
        {technology.map((elem, index) => <Tab key={`destination-${elem.name}`} isActive={index === show} onClick={() => setShow(index)}>
          {`0${index + 1}`}
        </Tab>
        )}
      </Tabs>
    </Column>
    <Column>
      <Content>
        {technology.map((elem, index) => <TechnologyOrganism {...elem} isActive={show === index} />)}
      </Content>

    </Column>
    <Column>
      <IMG
        tablet={technology[show].images.landscape}
        mobile={technology[show].images.landscape}
        desktop={technology[show].images.portrait}
        alt="img destination" />
    </Column>

  </Container >
};





export default Technology;

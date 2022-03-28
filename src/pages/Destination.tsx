import React, { useState } from "react";
import styled from "@emotion/styled";
import DetailOrganism from "../components/DetailOrganism";
import { destinations } from "../data.json";
import { IMG } from "../components/core/Image";
import Title from "../components/Title";


const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 100hv;
  max-width: 1440px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0px 160px;
  padding: 120px 0px 0px 0px;
`;


const Column = styled.section`
  display: flex;
  flex-direction: column;
`

const Tabs = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
`;

const Tab = styled.button<{ isActive: boolean }>`
  padding: 16px;
  background: transparent;
  color: white;
  text-transform: uppercase;
  border-width: 0px 0px 2px 0px;
  border-style: solid;
  border-color: ${({ isActive }) => `${isActive ? "white" : "transparent"}`};
`;

const Content = styled.section`position: relative;`;



const Destination = () => {
  const [show, setShow] = useState(0);

  return <Container>
    <Title number={"01"} description={"PICk your DESTINATION"} />
    <Column>
      <IMG
        tablet={destinations[show].images.png}
        mobile={destinations[show].images.png}
        desktop={destinations[show].images.png}
        alt="img destination" />
    </Column>
    <Column>
      <Tabs>
        {destinations.map((elem, index) => <Tab key={`destination-${elem.name}`} isActive={index === show} onClick={() => setShow(index)}>
          {elem.name}
        </Tab>
        )}
      </Tabs>
      <Content>
        {destinations.map((elem, index) => <DetailOrganism {...elem} isActive={show === index} />)}
      </Content>
    </Column>
  </Container >
};


export default Destination;

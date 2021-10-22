import React from 'react';
import styled from '@emotion/styled';

import './App.css';
import Routers from './routes';


const Container = styled.section`
  background-color: #0b0d17;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Routers />
    </Container>
  );
}

export default App;

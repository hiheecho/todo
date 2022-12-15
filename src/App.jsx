import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TodolistContainer from "./components/TodolistContainer";

function App() {
  return (
    <AppContainer>
      <Header />
      <TodolistContainer />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  max-width: 1200px;
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default App;

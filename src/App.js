import React from 'react';
import Header from "./components/header/Header";
import CustomerState from "./components/customerState/CustomerState";
import Statement from "./components/statement/Statement";
import styled from "styled-components";

function App() {
  return (
    <div>
          <Header />
          <MainWrapper>
              <CustomerState />
              <Statement />
          </MainWrapper>
    </div>
  );
}

const MainWrapper = styled.div`
  display: grid;
  margin: 25px 50px;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
`;

export default App;

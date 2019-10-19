import React from 'react';
import styled from "styled-components";

const StatementLine = ({ type, account, sum, accountState, notice}) => {
    return (
        <LabelWrapper backgroundColor={type}>
            <span> {account} </span>
            <span> {sum} </span>
            <span> {notice} </span>
            <span> {accountState} </span>
        </LabelWrapper>
    );
};

const LabelWrapper = styled.div`
  background-color: ${ props => props.backgroundColor ? 'green' : 'transparent'};
  margin-bottom: 25px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export default StatementLine;

import React from 'react';
import styled from "styled-components";

const InfoLabel = ({ label, data, currency}) => {
    return (
        <LabelWrapper>
            <span>{label}: </span>
            <span> {data} </span>
            <span> {currency}</span>
        </LabelWrapper>
    );
};

const LabelWrapper = styled.span`
  display: grid;
  grid-template-columns: 150px auto 30px;
  margin: 10px 25px;
  border-bottom: 1px solid #004fff;
`;

export default InfoLabel;

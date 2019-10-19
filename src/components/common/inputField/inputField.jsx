import React from 'react';
import styled from "styled-components";

const InputField = ({ label, type}) => {
    return (
        <div>
            <StyledP>{label}</StyledP>
            <input type={type}/>
        </div>
    );
};

const StyledP = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
`

export default InputField;

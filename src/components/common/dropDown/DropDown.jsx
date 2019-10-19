import React from 'react';
import styled from "styled-components";

const DropDown = ({ label, options}) => {

    const option = options.map( (elem, idx) => <option key={idx}> {elem} </option>);

    return (
        <div>
            <StyledP>{label}</StyledP>
            <select name="" id="">
                {option}
            </select>
        </div>
    );
};

const StyledP = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
`;

export default DropDown;

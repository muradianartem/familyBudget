import React from 'react';
import InputField from "../common/inputField/inputField";
import DropDown from "../common/dropDown/DropDown";
import logo  from '../../images/logo-wallet.svg';
import styled from 'styled-components';

const Header = () => {

    return (
        <StyledMenu>
            <Logo src={logo} />
            <DropDown label="type" options={['income', 'outcome']} />
            <DropDown label="account" options={['pocket','USD bank','UAH cash']} />
            <InputField label="Summary" type="number" />
            <InputField label="notice" type="text" />
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
  display: flex;
  padding: 20px 5%;
  justify-content: space-between;
  background-color: #004fff;
`;

const Logo = styled.img`
  width: 50px;
`;



export default Header;


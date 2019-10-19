import React from 'react';
import InfoLabel from '../common/infoLabel/InfoLabel';
import styled from "styled-components";

const CustomerState = () => {
    return(
        <WrapperState>
            <InfoLabel label="Pocket Money" data={120} currency="$" />
            <InfoLabel label="Pocket Money" data={24500} currency="₴" />
            <InfoLabel label="Bank account UAH" data={75000} currency="₴" />
            <InfoLabel label="Bank account USD" data={4600} currency="$" />
            <InfoLabel label="Bank account EUR" data={450} currency="€" />
        </WrapperState>
    );
};

const WrapperState = styled.div`
  width: 300px;
  margin-top: 25px;
  border-right: 1px solid #004fff;
`;

export default CustomerState;

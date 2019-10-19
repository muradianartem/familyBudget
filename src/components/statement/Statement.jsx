import React from 'react';
import styled from "styled-components";
import StatementLine from '../common/statementLine/StatementLine';

const Statement = () => {
    return (
        <LabelWrapper>
            <span> Statement: </span>
            <div>
                <StatementLine account="Bank account UAH" type={true} accountState={75000} sum={3000} notice="gift"/>
                <StatementLine account="Pocket Money UAH" type={false} accountState={75000} sum={200} notice="taxi"/>
                <StatementLine account="Bank account USD" type={false} accountState={75000} sum={10} notice="udemy course"/>
            </div>
        </LabelWrapper>
    );
};

const LabelWrapper = styled.span`

`;

export default Statement;

import React from 'react';
import { View, Text} from 'react-native';
import styled from 'styled-components';

const Header = styled.View`
    flex-direction: row;
    width: 100%;
    height: 200px;
    background-color: #0F546A;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.Text`
    font-size: 35px;
    color:#10F9BB;
`;

export default () => {
    return (
        <Header>
            <HeaderText>Fast Media Social</HeaderText>
        </Header>
    )
}
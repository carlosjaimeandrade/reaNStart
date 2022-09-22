import React from 'react';
import styled from 'styled-components/native'
import {View, SafeAreaView, Text} from 'react-native'


const Page = styled.SafeAreaView`
  background-Color: red;
  height: 100%;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-Color: #EEE;
  height: 200px;
  flex-wrap: wrap;
`;

const Quadrado = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${props=>props.cor};
  margin: 15px;
`;

export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="red"></Quadrado>
      </Header>
    </Page>
 
  )
}
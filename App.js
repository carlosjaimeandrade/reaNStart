import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import {SafeAreaView, View} from 'react-native'
import Header from './src/components/Header'

const Page = styled.View`
  flex: 1;
  background-color: #ECF9FD;
`;

export default () => {
  return (
    <Page>
      <Header />
    </Page>
  )
}
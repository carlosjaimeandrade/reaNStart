import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import {View, SafeAreaView, Text, Button, TouchableNativeFeedback, KeyboardAvoidingView, Platform } from 'react-native'


const Page = styled.SafeAreaView`
  background-Color: #fff;
  height: 100%;
`;

export default () => {
  return (
    <Page>
        <Hello frase="Seja bem vindo"></Hello>

    </Page>
  )
}
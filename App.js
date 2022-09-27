import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner } from "native-base";
import { View, Text, ScrollView } from "react-native";
import styled from 'styled-components/native'
import  lista  from "./src/lista"


const Item = styled.View`
  padding: 10px;
  margin: 10px;
  background-color: red;
`;

const ItemText = styled.Text`
  font-size: 15px;
`;

export default () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
      { lista.map((item, index) => {
        return (
          <Item key={index}>
            <ItemText>{item.task}</ItemText>
          </Item>
        );
      })}
      </ScrollView>
      <Button  isLoading isLoadingText="Submitting" variant="outline" size="xs" onPress={() => console.log("hello world")}>Click Me</Button>
      <Spinner size="lg" accessibilityLabel="Loading posts" />
    </NativeBaseProvider>
      
  )
}
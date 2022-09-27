import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner } from "native-base";
import { View, Text, ScrollView } from "react-native";
import styled from 'styled-components/native'
import  lista  from "./src/lista"


const Item = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px;
  background-color: red;
`;

const BtnLight = styled.TouchableHighlight`
  background-color: blue;
  padding: 10px;
  color: #fff;
`;

const ItemText = styled.Text`
  font-size: 25px;
`;

export default () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
      <BtnLight underlayColor="red" onPress={()=>{}}><Text>Clique aqui</Text></BtnLight>
      { lista.map((item, index) => {
        return (
          <Item key={index} activeOpacity={0.8}>
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
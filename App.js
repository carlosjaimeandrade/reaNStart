import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner } from "native-base";
import { View, Text, FlatList } from "react-native";
import styled from 'styled-components/native'
import lista  from "./src/lista"
import Listagem from "./src/components/Listagem"


export default () => {
  return (
    <NativeBaseProvider>
      <FlatList 
        data={lista}
        renderItem={({item})=><Listagem data={item} />}
        keyExtractor={item=>item.id}
      />
    </NativeBaseProvider>
      
  )
}
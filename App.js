import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner } from "native-base";
import { View, Text, FlatList } from "react-native";
import styled from 'styled-components/native'
import lista  from "./src/lista"
import Listagem from "./src/components/Listagem"
import AddArea from "./src/components/AddArea"

export default () => {

  const [items, setItems] = useState(lista);


  return (
    <NativeBaseProvider>
      <AddArea items={items} setItems={setItems} />
      <FlatList 
        data={lista}
        renderItem={({item})=><Listagem data={item} />}
        keyExtractor={item=>item.id}
      />
    </NativeBaseProvider>
      
  )
}
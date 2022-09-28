import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner } from "native-base";
import { View, Text, FlatList } from "react-native";
import styled from 'styled-components/native'
import lista  from "./src/lista"
import Listagem from "./src/components/Listagem"
import AddArea from "./src/components/AddArea"

export default () => {

  const [items, setItems] = useState(lista);


  const editando = (novoValor) =>{
    const id = Math.floor(Math.random() * 1111 + 6666)
    items.unshift({id:id , task: novoValor, done: false})
    if(!novoValor.trim()){
        alert('por favor preencha o campo')
    }
    setItems(items)
}


  return (
    <NativeBaseProvider>
      <AddArea data={editando} />
      <FlatList 
        data={lista}
        renderItem={({item})=><Listagem data={item} />}
        keyExtractor={item=>item.id}
      />
    </NativeBaseProvider>
      
  )
}
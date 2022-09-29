import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner, TouchableHighlight } from "native-base";
import { View, Text, FlatList, Modal } from "react-native";
import styled from 'styled-components/native'
import lista  from "./src/lista"
import Listagem from "./src/components/Listagem"
import AddArea from "./src/components/AddArea"
import { SwipeListView } from 'react-native-swipe-list-view';
import ListagemSwipe from "./src/components/ListagemSwipe"

const MenuContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

const MenuContent = styled.View`
  width: 100%;
  height: 70%;
  background-color: #3FAAFF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-direction: row;
  justify-content: flex-end;
  border: 1px solid #3FAAAD;
`;

const Btn = styled.Button`
  font-size: 20px
`;

const BtnClose = styled.TouchableHighlight`
  margin: 20px;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: #fff;
  flex-direction: row;
  align-items center;
  justify-content: center;
`

const BtnCloseIcon = styled.Text`
  font-size: 35px
  color: black;
`

export default () => {

  const [items, setItems] = useState(lista);
  const [modal, setModal] = useState(false)

  const editando = (novoValor) =>{
    const id = Math.floor(Math.random() * 1111 + 6666)
    items.unshift({id:id , task: novoValor, done: false})
    if(!novoValor.trim()){
        alert('por favor preencha o campo')
        return;
    }else {
      setItems(items)
    }   
  }

  const checking = (values) =>{
    
    const newValue = items.map(element => {
      if(element.id === values.id){
        element.done = !values.done
      }
      return element
    })

    setItems(newValue)
  
  }
  
  const destroy = (index) => {
    let newValue = items.filter((element,i) =>i != index)

    setItems(newValue)
  }

  return (
    <NativeBaseProvider>
      <Btn title="abrir menu" onPress={()=> setModal(!modal)} />
      <AddArea data={editando}  />
      <SwipeListView 
        data={items}
        renderItem={({item})=><Listagem data={item} check={checking}/>}
        renderHiddenItem={({item, index})=><ListagemSwipe data={index} deletando={destroy} />}
        leftOpenValue={100}
        disableLeftSwipe={true}
        keyExtractor={item=>item.id}
      />

      <Modal
        visible={modal}
        animationType="slide"
        transparent={true}
      >
        <MenuContainer>
          <MenuContent>
            <BtnClose underlayColor="#3FAAAD"  onPress={()=> setModal(!modal)}>
              <BtnCloseIcon>x</BtnCloseIcon>
            </BtnClose>
          </MenuContent>
        </MenuContainer>
      </Modal>
    </NativeBaseProvider>
      
  )
}
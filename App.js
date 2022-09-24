import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import {View, SafeAreaView, Text, Button, TouchableNativeFeedback, KeyboardAvoidingView, Platform } from 'react-native'


const Page = styled.SafeAreaView`
  background-Color: #fff;
  height: 100%;
`;

const Btn = styled.View`
  background-color: blue;
  border-radius: 3px;
  width: 100%;
  padding: 10px;
  color: #fff;
  border-radius: 50px;
  border: 1px solid black
  margin-top: 10px
  font-size: 32px
  text-align: center
  background-color: red;
  }
`;

const Input = styled.TextInput`
  width: 100%;
  border: 1px solid;
  padding: 20px;
  background-color: #eee;
  color: black;
  font-size: 30px;
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

const P = styled.Text`
  font-size: 30px;
`;

const Label = styled.Text`
  font-size: ${props=>props.size}px;
  text-align: center;
  color: #fff;
`;

const Hello = (props) => {

  const [name, setName] = useState('Bonieky');
  
  return (
    <P>{props.frase} {name}</P>
  )
}

export default () => {

  const [nome, setNome] = useState('carlos');
  const [idade, setIdade] = useState('52');
  const [mostrar, setMostrar] = useState(false);

  const mudaNome = (nome) =>{
    setNome(nome)
  }

  const mudaIdade = (idade) =>{
    setIdade(idade)
  }

  const mostrarQuadrado = () => {
    setMostrar(!mostrar)
  }

  useEffect(()=>{
    alert(Platform.OS)
  },[]);

  return (
    <Page>
      <KeyboardAvoidingView behavior='padding'>
        <Hello frase="Seja bem vindo"></Hello>

        <P>Nome: {nome}</P>
        <Input value={nome} onChangeText={mudaNome} placeholder="useless placeholder"  keyboardType="text"></Input>

        <P>Idade: {idade}</P>
        <Input value={idade} onChangeText={mudaIdade} placeholder="Insira a idade" keyboardType="numeric"  ></Input>

    
        <TouchableNativeFeedback onPress={() => alert(nome)} >
            <Btn><Label size="25">Entrar</Label></Btn>
        </TouchableNativeFeedback>

        <Button onPress={() => alert(`${nome} ${idade}`)} title="Canlando"></Button>

        <Button onPress={mostrarQuadrado} title={mostrar ? "Ocultar" : "Mostrar"} ></Button>

        {mostrar &&
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
        }
        
        <Input value={nome} onChangeText={mudaNome} placeholder="useless placeholder"  keyboardType="text"></Input>
      </KeyboardAvoidingView>
    </Page>
  )
}
import React, {useState, useEffect, StatusBar, FlatList} from 'react';
import styled from 'styled-components/native'
import {View, SafeAreaView, Text, Button, TouchableNativeFeedback } from 'react-native'


const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center
`;

const HeaderText = styled.Text`
  font-size: 25px;
  margin-top: 15px;
  color: #000
`

const Input = styled.TextInput`
  width: 90%;
  background-color: #EEE;
  font-size: 20px
  padding: 20px
  margin-top: 15px;
  border-radius: 10px;
`
const CalcButton = styled.Button`
  margin-top: 15px;
  width: 90%;
`;

const ResultArea = styled.View`
  width: 90%;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`
const PercentualArea = styled.View`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const PercentualAreaItem = styled.Button`
  margin: 5px
`;

const ResultAreaText = styled.Text`
  width: 100%;
  margin-top: 10px;
  font-size: 20px
  background-color: #EEE;
  justify-content: center;
  align-items: center;
`

const ResultAreaTextItem = styled.Text`
  width: 100%;
  font-size: 20px
  font-weight: bold;
  background-color: #EEE;
`

export default () => {

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = (valor) =>{
    let billN = parseFloat(bill)

    setTip((pct * billN)/100)
  }

  useEffect(()=>{
    calc()
  },[bill, pct]);

  return (
    <Page>
 
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        value={bill}
        placeholder="Quanto deu a conta"
        placeholderTextColor="#000"
        keyboardType="numeric"
        onChangeText={bill=>setBill(bill)}
      />

      <PercentualArea>
        <PercentualAreaItem onPress={()=>setPct(10)} title="10%"></PercentualAreaItem>
        <PercentualAreaItem onPress={()=>setPct(20)} title="20%"></PercentualAreaItem>
        <PercentualAreaItem onPress={()=>setPct(30)} title="30%"></PercentualAreaItem>
        <PercentualAreaItem onPress={()=>setPct(40)} title="40%"></PercentualAreaItem>
        <PercentualAreaItem onPress={()=>setPct(50)}title="50%"></PercentualAreaItem>
        <PercentualAreaItem onPress={()=>setPct(60)} title="60%"></PercentualAreaItem>
      </PercentualArea>
      
      <ResultArea>
        <ResultAreaText>Calcular: </ResultAreaText>
        <ResultAreaTextItem>{pct}%</ResultAreaTextItem>
      </ResultArea>

      {/* <CalcButton title="Calcular" onPress={calc} /> */}
      {bill > 0 &&
        <ResultArea>
          <ResultAreaText>Valor da conta: </ResultAreaText>
          <ResultAreaTextItem>{parseFloat(bill).toFixed(2)}</ResultAreaTextItem>

          <ResultAreaText>Valor da Gorjeta {pct}%: </ResultAreaText>
          <ResultAreaTextItem>{parseFloat(tip).toFixed(2)}</ResultAreaTextItem>

          <ResultAreaText>Valor total:</ResultAreaText>
          <ResultAreaTextItem>{parseFloat(bill) + tip}</ResultAreaTextItem>
        </ResultArea>
      }
    </Page>
  )
}
import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import styled from 'styled-components';


const Area = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Input = styled.TextInput`
    background-color: #CCC;
    width: 100%;
    border-radius: 10px
`;

const Label = styled.Text`
    margin-top: 10px;
    font-size: 12px;
`;

const InputArea = styled.View`
    width: 95%;
`

export default (props) => {

    const [novoValor, setNovoValor] = useState('');


    const editando = () =>{
        const id = Math.floor(Math.random() * 1111 + 6666)
        const items = props.items;
        items.unshift({id:id , task: novoValor, done: false})
        if(!novoValor.trim()){
            alert('por favor preencha o campo')
        }
        props.setItems(items)
        setNovoValor('')
    }

    return (
        <Area>
            <InputArea>
                <Label>Entre com o novo registro</Label>
                <Input
                placeholder="Teste" 
                value={novoValor}
                onChangeText={e=>setNovoValor(e)}
                onSubmitEditing={editando}
                returnKeyType="send"
                />
            </InputArea>
        </Area>
    )
}
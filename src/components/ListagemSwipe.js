import React from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import styled from 'styled-components';

const ListSwipe = styled.TouchableHighlight`
    margin: 10px;
    width: 90%;
    height: 130px;
    background-color: #3FAAAD;
    border-radius: 10px;
`;



export default (props) => {

    const deletar = () =>{
        props.deletando(props.data)
    }

    return (
        <ListSwipe onPress={()=>{deletar()}} underlayColor="#7FAAAD">
            <>
            </>
        </ListSwipe>
    )
}
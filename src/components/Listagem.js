import React from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import styled from 'styled-components';

const ListItem = styled.TouchableHighlight`
    flex-direction: row;
    padding: 0px 20px;
    margin: 10px;
    height: 130px;
    background-color: #3FAAFF;
    border-radius: 10px
    justify-content: space-between;
    align-items: center;
`;

const TextItem = styled.Text`
    font-size: 25px;
    color:#fff;
    padding: 10px;
`;


const Img = styled.Image`
    border-radius: 100px;
    width: 50px;
    height: 50px;
    background-color: red;
    margin-left: 10px;
`;

const Check = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: ${(props)=>props.color};
`

export default (props) => {

    const checking = () =>{
        props.check(props.data)
    }
    
    return (
    
        <ListItem activeOpacity={1} underlayColor="#3FAAAD" onPress={()=>checking()}>
            <>
                <View>
                    <Img resizeMode="cover" source={require('../images/logo.jpg')} />
                    <TextItem>Descrição</TextItem>
                </View>
                <TextItem>{props.data.task}</TextItem>
                <Check color={props.data.done == false ? "#fff" : "green"} />
            </>
        </ListItem>
    )
}
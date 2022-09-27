import React from 'react';
import { View, Text, Image} from 'react-native';
import styled from 'styled-components';

const ListItem = styled.View`
    flex-direction: row;
    padding: 20px;
    margin: 10px;
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


export default (props) => {
    return (
        <ListItem>
            <View>
                <Img resizeMode="cover" source={require('../images/logo.jpg')} />
                <TextItem>Descrição</TextItem>
            </View>
            <TextItem>{props.data.task}</TextItem>
        </ListItem>
    )
}
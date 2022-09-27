import React from 'react';
import { View, Text} from 'react-native';
import styled from 'styled-components';


const ListItem = styled.View`
    padding: 10px;
    margin: 10px;
    background-color: red;
`;

const TextItem = styled.Text`
    font-size: 35px;
    color:black;
`;

export default (props) => {
    return (
        <ListItem>
            <TextItem>Ola mundo</TextItem>
            <TextItem>{props.data.task}</TextItem>
        </ListItem>
    )
}
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function HomeScreen(props){
    const navigation = useNavigation();

    const [name, setName] = useState('');

    const enviarSobre = () => {
        navigation.navigate('About',{
            name
        })
    }

    return (
        <View style={styles.container}>
            <Text>Qual seu nome? {name}</Text>
            <TextInput value={name} onChangeText={e=>setName(e)} style={styles.input} />
            <Button title="Enviar" onPress={enviarSobre}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        width: 250,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#c4c4c4",
        marginBottom: 10
    }
})


export default HomeScreen;
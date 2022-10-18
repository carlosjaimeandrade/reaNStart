import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function HomeScreen(props){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: count
        })
    },[count]);

    // podemos usar o setOption para alterar a barra de navegação no aplicativo adicionando ate mesmo botões adicionando a propriedade headerRight
    const enviarSobre = () => {
        navigation.setOptions({
            title: name,
            headerStyle:{
                backgroundColor: 'blue'
            }
        })


 
        // navigation.navigate('About',{
        //     name
        // })
    }

    return (
        <View style={styles.container}>
            <Text>Qual seu nome? {name}</Text>
            <TextInput value={name} onChangeText={e=>setName(e)} style={styles.input} />
            <Button title="Enviar" onPress={enviarSobre}></Button>
            <Button title="Mais 1" onPress={()=>setCount(count+1)}></Button>
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
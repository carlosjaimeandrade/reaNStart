import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function AboutScreen(){
    const navigation = useNavigation();

    const home = () =>{
        //navigation.goBack(); // volta para pagina anterior
        //navigation.push('Home') // adiciona a pagina para voltar
        //navigation.popToTop('Home'); //volta para a raiz
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text>tela about</Text>
            <Button title="Ir para tela Home" onPress={home}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default AboutScreen;
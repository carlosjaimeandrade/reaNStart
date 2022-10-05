import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function HomeScreen(props){
    const navigation = useNavigation();

    const sobre = () => {
        navigation.navigate('About')
    }

    return (
        <View style={styles.container}>
            <Text>tela home</Text>
            <Button title="Ir para tela sobre" onPress={sobre}></Button>
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


export default HomeScreen;
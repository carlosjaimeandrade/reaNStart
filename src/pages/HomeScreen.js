import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function HomeScreen(props){
   
    return (
        <View style={styles.container}>
            <Text>Tab home</Text>
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
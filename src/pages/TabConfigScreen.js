import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
function TabConfigScreen(props){
   
    return (
        <View style={styles.container}>
            <Text>Tab config</Text>
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


export default TabConfigScreen;
import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import { Button } from 'react-native';

const MainStack = createStackNavigator();

export default () =>{
     return (
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: "center",
            headerStyle:{
                backgroundColor: 'red'
            },
            headerTitleStyle:{
                fontSize: 20,
                color: '#fff'
            }
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} options={{
                headerLeft:  () => <Button title="Opa1" onPress={ ()=> alert('ola mundo2')} ></Button>,
                headerRight: () => <Button title="Opa1" onPress={ ()=> alert('ola mundo1')} ></Button>,
                headerTitle: () => <Button title="Opa2" onPress={ ()=> alert('ola mundo2')} ></Button>
            }} />
            <MainStack.Screen name="About" component={AboutScreen} />
        </MainStack.Navigator>
    )
}

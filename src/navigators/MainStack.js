import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

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
                title: "Inicio",
                headerTitleAlign: "center",
                headerStyle:{
                    backgroundColor: 'red'
                },
                headerTitleStyle:{
                    fontSize: 20,
                    color: '#fff'
                }
            }}/>
            <MainStack.Screen name="About" component={AboutScreen} options={{
                title: "sobre",
                headerBackTitle: "Voltar",
                headerBackTitleStyle: {
                    color: "#fff"
                }
            }} />
        </MainStack.Navigator>
    )
}

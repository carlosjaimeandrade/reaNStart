import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const MainStack = createStackNavigator();

export default () =>{
     return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} options={{
                title: "Inicio",
                headerTitleAlign: "center",
                headerStyle:{
                    backgroundColor: 'red',
                    height: 200
                },
                headerTitleStyle:{
                    fontSize: 20,
                    color: '#fff'
                }
            }}/>
            <MainStack.Screen name="About" component={AboutScreen} options={(props)=>({
                title: props.route.params.name
            })} />
        </MainStack.Navigator>
    )
}

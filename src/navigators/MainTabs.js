import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        tabBarOptions={{ 
            showIcon: true, 
            showLabel: true,
            activeTintColor: '#fff',
            activeBackgroundColor: 'blue',
            style:{
                height: 120
            },
            labelStyle:{
                fontSize: 18
            },
            labelPosition: 'beside-icon',
            keyboardHidesTabBar: true
        }}
        screenOptions={({route})=>({
            tabBarIcon: (focused, color, size) => {
                let imgSource = null;
               
                switch(route.name){
                    case 'TabHome': 
                        imgSource = require('../assets/home.png')
                        break
                    case 'TabAbout':
                        imgSource = require('../assets/interface.png')
                } 


                return <Image source={imgSource} style={{width: 24, height: 24}} />
            }
        })}
    >
        <Tab.Screen name="TabHome"  component={HomeScreen}  options={{tabBarLabel:"home"}} />
        <Tab.Screen name="TabAbout" component={AboutScreen} options={{tabBarLabel:"About"}}/>
    </Tab.Navigator>
);
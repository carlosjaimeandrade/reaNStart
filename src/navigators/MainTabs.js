import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';

import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={(props)=><CustomTabBar {...props} />}>
        <Tab.Screen name="TabHome"  component={HomeScreen}  options={{tabBarLabel:"Home"}} />
        <Tab.Screen name="TabAbout" component={AboutScreen} options={{tabBarLabel:"About"}}/>
        <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:"Config"}}/>
    </Tab.Navigator>
);
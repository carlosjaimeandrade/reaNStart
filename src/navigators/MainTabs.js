import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="TabHome"  componet={HomeScreen} />
        <Tab.Screen name="TabAbout" componet={AboutScreen} />
    </Tab.Navigator>
);
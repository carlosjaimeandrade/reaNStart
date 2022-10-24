import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTab from './src/navigators/MainTabs'

export default () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}


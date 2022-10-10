import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';


export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}


import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import {SafeAreaView, View, Image, Text} from 'react-native'
import Header from './src/components/Header'

const Page = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ECF9FD;
`;

const Img = styled.Image`
  width: 100%;
  height: 200px;
  background-color: red;
`;

export default () => {
  const [status, setStatus] =  useState('');


  return (
    <Page>
      <Header />
      <Img resizeMode="cover" source={require('./src/images/logo.jpg')} />
      <Img 
      resizeMode="cover" 
      source={{uri: 'https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/241-1.jpg'}} 
      defaultSource={require('./src/images/Loading_icon.gif')}
      onLoadStart={()=>setStatus('carregando...')}
      onLoad={()=>setStatus('carregou...')}
      onError={(e)=>setStatus(e.nativeEvent.error)}
      />
      <Text>{status}</Text>
    </Page>
  )
}
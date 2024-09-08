// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/Routes'

// https://www.youtube.com/watch?v=GZ_QSVDTQRw&t=503s

// variaveis de estilização
const backBlue = '#2D9DF9'
const backWhite = '#F4F7FF'
const colorText = '#A1A1A1'



export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor='#C4D6FF' barStyle="#0050FF"/>   */}
      {/* Barrinha no topo da tela; cor de fundo e cor dos icones */}
      <Routes/>

    </NavigationContainer>
  );
}

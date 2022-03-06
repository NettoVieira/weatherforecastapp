import React from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './styles';

import Animacao from '../../assets/lottie/weather.json';

export function Loading() {
  return (
    <Container>
      <LottieView 
        source={Animacao}
        autoPlay
        style={{width: 230, height: 230}}
      />
    </Container>
  )
}
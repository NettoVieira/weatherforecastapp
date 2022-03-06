import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon
} from './styles'

interface Props extends RectButtonProps {
  onPress: () => void;
  checked?: boolean;
}

export function ButtonSwipeable({onPress, checked,...rest} : Props) {
  return (
    <Container
      {...rest}
      onPress={onPress}
    >
      <Icon name="trash" />
    </Container>
  )
}
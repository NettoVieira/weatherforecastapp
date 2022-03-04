/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, ButtonText, Load} from './styles';

interface Props extends RectButtonProperties {
  title: string;
  onSubmit?: () => void;
  isLoading?: boolean;
}

export function Button({title, onSubmit, isLoading, ...rest}: Props) {
  return (
    <Container
      enabled={!isLoading}
      onPress={onSubmit}
      {...rest}>
      {isLoading ? <Load /> : <ButtonText>{title}</ButtonText>}
    </Container>
  );
};

export default Button;

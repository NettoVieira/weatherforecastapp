import React from 'react';

import { 
  Container,
  States,
  Icon,
} from './styles'

interface StatesProps {
  state: string;
  acronym: string;
  onPress: () => void;
}

export function StatesSelectButton( { state, acronym, onPress }: StatesProps) {
  return (
    <Container onPress={onPress}>
      <States>{state} - {acronym}</States>

      <Icon name="chevron-down"></Icon>

    </Container>
  )
}
import React from 'react';

import { 
  Container,
  Content,
  ButtonClose,
  IconClose,
  Title,
} from './styles';

interface Props {
  onPressClose: () => void;
}

export function ModalHeader({
  onPressClose
}: Props) {
  return (
    <Container>
      <Content>
        <ButtonClose onPress={onPressClose}>
          <IconClose name="x" />
        </ButtonClose>

        <Title>Selecione a cidade</Title>
      </Content>
    </Container>
  )
}
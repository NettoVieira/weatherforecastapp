import React from 'react';

import { 
  Container,
  Content,
  ButtonClose,
  IconClose,
  Title,
} from './styles';

interface Props {
  title: string;
  onPressClose: () => void;
}

export function ModalHeader({
  title,
  onPressClose
}: Props) {
  return (
    <Container>
      <Content>
        <ButtonClose onPress={onPressClose}>
          <IconClose name="x" />
        </ButtonClose>

        <Title>{title}</Title>
      </Content>
    </Container>
  )
}
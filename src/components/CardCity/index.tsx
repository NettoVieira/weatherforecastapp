import React from 'react';

import { 
  Container,
  NameCity,
  Icon,
  Header,
  Region,
} from './styles';

interface Props {
  nameCity: string;
  region: string;
}

export function CardCity({
  nameCity,
  region,
}: Props) {
  return (
    <Container>
      <Header>
        <NameCity>{nameCity}</NameCity>
        <Icon name="city"/>
      </Header>

      <Region>{region}</Region>
    </Container>
  )
}


import React from 'react';

import { 
  Container,
  Header,
  Title,
  SearchButton, 
  Icon
} from './styles';

export function ListCities() {
  return (
    <Container>
      <Header>
        <Title>Cidades</Title>

        <SearchButton onPress={() => {
          console.log('funciona?')
        }}>
          <Icon name="search"/>
        </SearchButton>
      </Header>
    </Container>
  )
}
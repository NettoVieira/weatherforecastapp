import React, { useState } from 'react';
import { Modal } from 'react-native';

import { SelectCities } from '../SelectCities';

import { 
  Container,
  Header,
  Title,
  SearchButton, 
  Icon
} from './styles';

export function ListCities() {
  const [citiesModalOpen, setCitiesModalOpen] = useState(false);

  const [cities, setCities] = useState({
    key: 'cidades',
    name: 'Selecione'
  })

  function handleOpenSelectCities() {
    setCitiesModalOpen(true)
  }

  function handleCloseSelectCities() {
    setCitiesModalOpen(false)
  }

  return (
    <Container>
      <Header>
        <Title>Cidades</Title>

        <SearchButton onPress={handleOpenSelectCities}>
          <Icon name="search"/>
        </SearchButton>
      </Header>

      {/* Aqui vai a listagem de cidades que o usuario ja cadastrou */}

      <Modal visible={citiesModalOpen}>
        <SelectCities 
          closeSelectCities={handleCloseSelectCities}
          cities={cities}
          setCities={setCities}
        />
      </Modal>
    </Container>
  )
}
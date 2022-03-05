import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
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
  const [listcities, setListcities] = useState()
  const [citiesModalOpen, setCitiesModalOpen] = useState(false);

  useFocusEffect(useCallback(() => {
    console.log('teste')
  }, []))

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

      

      <Modal visible={citiesModalOpen}>
        <SelectCities
          setVisible={setCitiesModalOpen}
          closeSelectCities={handleCloseSelectCities}
        />
      </Modal>
    </Container>
  )
}
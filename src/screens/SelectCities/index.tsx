import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';

import { ModalHeader } from '../../components/ModalHeader';
import { StatesSelectButton } from '../../components/StatesSelectButton';
import { SelectStates } from '../SelectStates';

import { SearchCitiesAPI } from '../../services/api';

import { 
  Container,
  ContentButton,
  ListItem
} from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Cities {
  key: string;
  name: string;
}

interface CitiesSelectProps {
  cities: Cities;
  setCities: (category: Cities) => void;
  closeSelectCities: () => void;
}

export interface IStates {
  id: number;
  nome: string;
  sigla: string;
}

export function SelectCities({
  cities,
  setCities,
  closeSelectCities
} : CitiesSelectProps) {
  const [selectStatesModalOpen, setSelectStatesModalOpen] = useState(false);
  const [states, setStates] = useState<IStates>()

  // useFocusEffect(useCallback(() => {
  //   async function LoadStates() {
  //     const {data} = await SearchCitiesAPI.get('uf/v1');
      
  //     setListStates(data)
  //   }

  //   LoadStates();
  // }, []));

  function OpenSelectStates() {
    setSelectStatesModalOpen(true);
  }

  function closeSelectStates() {
    setSelectStatesModalOpen(false);
  }

  return (
    <Container>
      <ModalHeader 
        onPressClose={closeSelectCities} 
        title="Selecione a cidade"
      />

      <ContentButton>
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDSmzD1ydG1BQVZpn7XVjhy9A5VZz1HIpY',
            language: 'pt-BR',
          }}
        />
      </ContentButton>

      {/* Aqui vai a listagem de cidades */}

      <Modal visible={selectStatesModalOpen}>
        <SelectStates 
          closeSelectStates={closeSelectStates}
          setStates={setStates!}
          states={states!}
        />
      </Modal>
    </Container>
  )
}
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

import { ModalHeader } from '../../components/ModalHeader';
import { StatesSelectButton } from '../../components/StatesSelectButton';

import { SearchCitiesAPI } from '../../services/api';

import { 
  Container,
  ContentButton 
} from './styles';

interface Cities {
  key: string;
  name: string;
}

interface CitiesSelectProps {
  cities: Cities;
  setCities: (category: Cities) => void;
  closeSelectCities: () => void;
}

export interface ListStates {
  id: number;
  nome: string;
  sigla: string;
}

export function SelectCities({
  cities,
  setCities,
  closeSelectCities
} : CitiesSelectProps) {
  const [liststates, setListStates] = useState<ListStates[]>([])

  useFocusEffect(useCallback(() => {
    async function LoadStates() {
      const {data} = await SearchCitiesAPI.get('uf/v1');
      
      setListStates(data)
    }

    LoadStates();
  }, []));

  return (
    <Container>
      <ModalHeader onPressClose={closeSelectCities}/>
      <ContentButton>
        <StatesSelectButton 
          acronym='SP'
          state='São Paulo'
          onPress={() => {}}
        />
      </ContentButton>

      {/* Aqui vai a listagem de cidades */}
    </Container>
  )
}
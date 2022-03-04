import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from 'react-native'

import { ModalHeader } from '../../components/ModalHeader';
import { SearchCitiesAPI } from '../../services/api';

import { 
  Container,
  ListItem,
  ContentSelectState,
  Icon,
  NameState,
  Separator,
  Footer
} from './styles';
import Button from '../../components/Button';

export interface IStates {
  id: number;
  nome: string;
  sigla: string;
}

export interface FlatListItem {
  item: IStates
}

interface StatesSelectProps {
  states: IStates;
  setStates: (category: IStates) => void;
  closeSelectStates: () => void;
}

export function SelectStates({
  states,
  setStates,
  closeSelectStates
} : StatesSelectProps) {
  const [listStates, setListStates] = useState<IStates[]>([])

  useFocusEffect(useCallback(() => {
    async function LoadStates() {
      const {data} = await SearchCitiesAPI.get('uf/v1');
      
      setListStates(data)
    }

    LoadStates();
  }, []));

  return (
    <Container>
      <ModalHeader onPressClose={closeSelectStates} title="Selecione o estado(UF)"/>

      <ListItem 
        /* @ts-ignore */
        data={listStates}
        renderItem={({item}: FlatListItem) => (
          <ContentSelectState>
            <Icon name="flag"/>
            
            <NameState>{item.nome} - {item.sigla}</NameState>
          </ContentSelectState>
        )}
        ItemSeparatorComponent={() => (<Separator></Separator>)}
      />

      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  )
}
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';

import { SearchCitiesAPI } from '../../services/api';

import { Container } from './styles';

interface Cities {
  key: string;
  name: string;
}

interface CitiesSelectProps {
  states: Cities;
  setStates: (category: Cities) => void;
  closeSelectStates: () => void;
}

export interface ListStates {
  id: number;
  nome: string;
  sigla: string;
}

export function SelectStates({
  states,
  setStates,
  closeSelectStates
} : CitiesSelectProps) {

  return (
    <Container>
      {/* Aqui vai a listagem dos stados para o usuario selecionar */}
    </Container>
  )
}
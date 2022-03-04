import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ListStates } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const ListItemStates = styled(FlatList as new () => FlatList<ListStates>)`
  padding: 8px 3px 2px;
`;
import React from 'react';

import { Container, Icon, SearchButton, Title } from './styles';

interface Props {
  title: string,
  isSearchVisible: boolean,
  onPress?: () => void;
}

export function Header({
  title,
  isSearchVisible,
  onPress,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      {isSearchVisible && (
        <SearchButton onPress={onPress}>
          <Icon name="search"/>
        </SearchButton>
      )}

    </Container>
  )
}
import React from 'react';

import { 
  Container,
  NameCity,
  Icon,
  Header,
  Region,
  ContainerTexts,
  Temp,
  Footer,
  WeatherDescription,
  TempMinMax
} from './styles';

interface Props {
  onPress?: () => void,
  main_text: string,
  secondary_text: string,
  temp: number,
  weather_description: string,
  temp_max: number,
  temp_min: number,
  isVisibleIcon: boolean,
}

export function WeatherCardCity({
  main_text,
  secondary_text,
  temp,
  weather_description,
  temp_max,
  temp_min,
  onPress,
  isVisibleIcon
}: Props) {
  return (
    <Container onPress={onPress}>
      
      <Header>
        <ContainerTexts>
          <NameCity>{main_text}</NameCity>
          <Region>{secondary_text}</Region>
        </ContainerTexts>
        <Temp>{temp}º</Temp>
      </Header>

      <Footer>
        <ContainerTexts>
          <WeatherDescription>
            {weather_description}
          </WeatherDescription>

          <TempMinMax>{temp_min}º - {temp_max}º</TempMinMax>
        </ContainerTexts>
        
        {isVisibleIcon && (
          <Icon name="ios-heart-outline"/>
        )}
        
      </Footer>

    </Container>
  )
}


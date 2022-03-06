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
  TempMinMax,
  ButtonFavoriteCity
} from './styles';

interface Props {
  onPressCard?: () => void,
  onPressFavorite?: () => void,

  main_text: string,
  secondary_text: string,
  temp: number,
  weather_description: string,
  temp_max: number,
  temp_min: number,
  isVisibleIcon: boolean,
  isFavorite?: boolean
}

export function ForeCastCard({
  main_text,
  secondary_text,
  temp,
  weather_description,
  temp_max,
  temp_min,
  onPressCard,
  isVisibleIcon,
  onPressFavorite,
  isFavorite
}: Props) {
  return (
    <Container onPress={onPressCard}>
      
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
          <ButtonFavoriteCity onPress={onPressFavorite}>
            {isFavorite ? (
              <Icon name="ios-heart-sharp"/>
            ) : (
              <Icon name="ios-heart-outline"/>
            )}
            
          </ButtonFavoriteCity>
        )}
        
      </Footer>

    </Container>
  )
}


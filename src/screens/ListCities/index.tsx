import { NavigationProp, ParamListBase, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getRealm } from '../../services/realm';
import { SelectCities } from '../SelectCities';
import { WeatherCardCity } from '../../components/WeatherCardCity';
import { ButtonSwipeable } from '../../components/ButtonSwipple';
import { Header } from '../../components/Header'

import { 
  Container,
  ItemsList,
  SwippleRemove,
  HeaderList,
  ManageButton,
  IconManageButton,
  TextManageButton
} from './styles';

export interface Cities {
  main_text: string,
  secondary_text: string,
  temp: number,
  weather_description: string,
  temp_max: number,
  temp_min: number,
  lat: string,
  lon: string
}

export function ListCities() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const [listcities, setListcities] = useState<Cities[]>([]);
  const [isManageActivated, setManageActivated] = useState(false)
  const [citiesModalOpen, setCitiesModalOpen] = useState(false);

  async function LoadView() {
    try {
      const realm = await getRealm();
      
      const getcities = realm.objects<Cities>('CitiesSchema');

      const cities: Cities[] = [] as Cities[];

      getcities.forEach(item => {
        const itemList: Cities = {
          weather_description: item.weather_description,
          lat: item.lat,
          lon: item.lon,
          main_text: item.main_text,
          secondary_text: item.secondary_text,
          temp: item.temp,
          temp_max: item.temp_max,
          temp_min: item.temp_min
        }

        cities.push(itemList)
      })

      setListcities(cities)
    } catch (error) {
      Alert.alert('Erro', `${error}`)
    }
  }

  useFocusEffect(useCallback(() => {
    async function LoadCities() {
      await LoadView();
    }

    LoadCities()
  }, []))

  function handleOpenSelectCities() {
    setCitiesModalOpen(true)
  }

  function handleCloseSelectCities() {
    setCitiesModalOpen(false)
  }

  function handleNavigateForecast(item: Cities) {
    navigate('ForecastNextDays', item)
  }

  async function handleRemoveCity(item: Cities) {
    try {
      const realm = await getRealm();

      realm.write(() => {
        const removeCity = realm.objects('CitiesSchema').filtered(`main_text == '${item.main_text}'`);
        realm.delete(removeCity)
      })

      await LoadView();
    } catch (error) {
      Alert.alert('Erro', `${error}`)
    }
  }

  function handleActiveManageList() {
    setManageActivated(!isManageActivated)
  }

  return (
    <Container>
      <Header title="Cidades" isSearchVisible onPress={handleOpenSelectCities}/>

      <HeaderList>
        <ManageButton onPress={handleActiveManageList}>
          <TextManageButton>Gerir</TextManageButton>
          <IconManageButton name="stream"/>
        </ManageButton>
      </HeaderList>

      <ItemsList 
        data={listcities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <SwippleRemove
            ref={(ref) => isManageActivated ? ref?.openRight() : ref?.close()}
            containerStyle={{height: 115, marginBottom: 8}}
            renderRightActions={() => (
              <ButtonSwipeable onPress={() => handleRemoveCity(item)}/>
            )}
          >
            <WeatherCardCity 
              onPress={() => handleNavigateForecast(item)}
              main_text={item.main_text} 
              secondary_text={item.secondary_text} 
              temp={item.temp}
              temp_max={item.temp_max}
              isVisibleIcon
              temp_min={item.temp_min}
              weather_description={item.weather_description}
            />
          </SwippleRemove>
        )}
      />      

      <Modal visible={citiesModalOpen}>
        <SelectCities
          setListcities={setListcities}
          listcities={listcities}
          setVisible={setCitiesModalOpen}
          closeSelectCities={handleCloseSelectCities}
        />
      </Modal>
    </Container>
  )
}
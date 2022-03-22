import { NavigationProp, ParamListBase, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UpdateMode } from 'realm';
import { RFValue } from 'react-native-responsive-fontsize';

import { getRealm } from '../../services/realm';
import { SelectCities } from '../SelectCities';
import { ForeCastCard } from '../../components/ForecastCard';
import { ButtonSwipeable } from '../../components/ButtonSwipple';
import { Header } from '../../components/Header'
import CitySVG from '../../assets/svg/Weather.svg';

import { Cities } from '../../interfaces/Cities';

import { 
  Container,
  ItemsList,
  SwippleRemove,
  HeaderList,
  ManageButton,
  IconManageButton,
  TextManageButton,
  ContainerEmptyList,
  EmptyText
} from './styles';

export function ListCities() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const [listcities, setListcities] = useState<Cities[]>([]);
  const [isManageActivated, setManageActivated] = useState(false)
  const [citiesModalOpen, setCitiesModalOpen] = useState(false);

  async function LoadView() {
    try {
      setManageActivated(false)
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
          temp_min: item.temp_min,
          isFavorite: item.isFavorite
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

  async function handleFavoriteCity(item: Cities) {
    const realm = await getRealm();

    realm.write(() => {
      realm.create<Cities>('CitiesSchema', {
        main_text: item.main_text,
        isFavorite: !item.isFavorite
      }, UpdateMode.Modified)
    })

    await LoadView();
  }

  function handleActiveManageList() {
    setManageActivated(!isManageActivated)
  }

  function handleOpenSelectCities() {
    setCitiesModalOpen(true)
  }

  function handleCloseSelectCities() {
    setCitiesModalOpen(false)
  }

  function handleNavigateForecast(item: Cities) {
    navigate('ForecastNextDays', item)
  }

  return (
    <Container>
      <Header title="Cidades" isSearchVisible onPress={handleOpenSelectCities}/>

      {listcities.length !== 0 && (
        <HeaderList>
          <ManageButton onPress={handleActiveManageList}>
            <TextManageButton>Gerir</TextManageButton>
            <IconManageButton name="stream"/>
          </ManageButton>
        </HeaderList>
      )}

      <ItemsList 
        data={listcities.sort((a, b) => {
          if (a.isFavorite) {
            return -1
          } else if (b.isFavorite) {
            return 1
          }
          return 0
        })}
        ListEmptyComponent={() => (
          <ContainerEmptyList>
            <CitySVG width={RFValue(230)} height={RFValue(230)}/>
            <EmptyText>Adicione uma ou mais cidades para acompanhar a previsão do tempo!</EmptyText>
          </ContainerEmptyList>
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <SwippleRemove
            ref={(ref) => isManageActivated ? ref?.openRight() : ref?.close()}
            containerStyle={{height: 115, marginBottom: 8}}
            renderRightActions={() => (
              <ButtonSwipeable onPress={() => handleRemoveCity(item)}/>
            )}
          >
            <ForeCastCard 
              onPressCard={() => handleNavigateForecast(item)}
              onPressFavorite={() => handleFavoriteCity(item)}
              main_text={item.main_text} 
              secondary_text={item.secondary_text} 
              temp={item.temp}
              temp_max={item.temp_max}
              isVisibleIcon
              temp_min={item.temp_min}
              weather_description={item.weather_description}
              isFavorite={item.isFavorite}
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
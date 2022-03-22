import React, { Dispatch, SetStateAction, useCallback, useState, useRef } from 'react';
import { GooglePlacesAutocomplete, GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, Text } from 'react-native';
import { UpdateMode } from 'realm';

import { getRealm } from '../../services/realm'
import { ModalHeader } from '../../components/ModalHeader';
import { Button } from '../../components/Button';
import { CardCity } from '../../components/CardCity';
import { weatherAPI } from '../../services/api';
import { Loading } from '../../components/Loading';

import { Cities } from '../../interfaces/Cities';

import { 
  Container,
  ContentSearchInput,
  Footer,
  ItemsList
} from './styles';

interface CitiesSelectProps {
  setVisible: (visible: boolean) => void;
  closeSelectCities: () => void;
  setListcities: Dispatch<SetStateAction<Cities[]>>
  listcities: Cities[];
}

export function SelectCities({
  setVisible,
  closeSelectCities,
  setListcities,
  listcities
} : CitiesSelectProps) {
  const [listSelectedCities, setListSelectedCities] = useState<Cities[]>([])
  const [isLoading, setLoading] = useState(false)

  const textinputRef = useRef<GooglePlacesAutocompleteRef>(null)

  const handleSelectCities = useCallback(async (data: GooglePlaceData, detail: GooglePlaceDetail | null) => {
    try {
      setLoading(true)
      const paramsRequest = {
        q: data.structured_formatting.main_text
      }
  
      const response = await weatherAPI.get('weather', {params: paramsRequest})
  
      const insertCities: Cities = {
        main_text: data.structured_formatting.main_text,
        secondary_text: data.structured_formatting.secondary_text,
        temp: Math.round(response.data.main.temp),
        temp_max: Math.round(response.data.main.temp_max),
        temp_min: Math.round(response.data.main.temp_min),
        weather_description: response.data.weather[0]?.description,
        lat: String(response.data.coord.lat),
        lon: String(response.data.coord.lon),
        isFavorite: false,
      }
  
      setListSelectedCities(oldState => [...oldState, insertCities])
      textinputRef.current?.clear()
    } catch (error: any) {
      Alert.alert('Erro', `${error.response.data.message}`)
    } finally {
      setLoading(false)
    }
  }, [])

  async function handleConfirm() {
    try {
      const realm = await getRealm();

      for (const insertCities of listSelectedCities) {
        realm.write(() => {
          realm.create<Cities>('CitiesSchema', insertCities, UpdateMode.Modified)
        })
      }
      const loadListCities: Cities[] = [] as Cities[]

      const cities = realm.objects<Cities>('CitiesSchema');
      
      cities.forEach((item) => {
        const itemlist: Cities = {
          lat: item.lat,
          lon: item.lon,
          main_text: item.main_text,
          secondary_text: item.secondary_text,
          temp: item.temp,
          temp_max: item.temp_max,
          temp_min: item.temp_min,
          weather_description: item.weather_description,
          isFavorite: item.isFavorite
        }

        loadListCities.push(itemlist)
      })

      setListcities(loadListCities)

      realm.close();
      closeSelectCities()
    } catch (error) {
      Alert.alert('Erro', `${error}`);
    } 
  }

  return (
    <>
      <Container>
        <ModalHeader 
          onPressClose={closeSelectCities} 
          title="Selecione a cidade"
        />
        
        <ContentSearchInput>
          <GooglePlacesAutocomplete
            placeholder='Pesquisar a cidade'
            styles={{textInput: {height: RFValue(60), elevation: 1}}}
            fetchDetails
            textInputProps={{}}     
            ref={textinputRef}       
            onPress={handleSelectCities}
            query={{
              key: 'AIzaSyBiZ7bbDF_830rfWdK-L6XZKFhPaTyx7QE',
              language: 'pt-BR',
              
              type: '(cities)'
            }}
          />
          {isLoading ? <Loading /> : (
            <ItemsList 
              data={listSelectedCities}
              keyExtractor={(item) => item.main_text}
              renderItem={({item}) => <CardCity nameCity={item.main_text} region={item.secondary_text} />}
            />
          )}
        
        </ContentSearchInput>
      </Container>
      <Footer>
        <Button title='Confirmar' onPress={handleConfirm}/>
      </Footer>
    </>
  )
}
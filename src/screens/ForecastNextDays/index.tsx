import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';
import eolocale from 'date-fns/locale/pt-BR'

import { weatherAPI } from '../../services/api';
import { Header } from '../../components/Header';
import { ForeCastCard } from '../../components/ForecastCard';

import { 
  Container,
  ItemsList 
} from './styles';
import { Alert } from 'react-native';
import { Loading } from '../../components/Loading';


interface Cities {
  main_text: string,
  secondary_text: string,
  temp: number,
  weather_description: string,
  temp_max: number,
  temp_min: number,
  lat: string,
  lon: string
}

interface ForecastTempDaily {
  day: number,
  max: number,
  min: number
}

interface WeatherForecastDaily {
  description: string,
}

export interface ForecastDaily {
  temp: ForecastTempDaily,
  weather: WeatherForecastDaily,
  dt: string,
  daylyweek: string,
}

interface RouteProps {
  route: {
    params: Cities
  }
}

export function ForecastNextDays({route}: RouteProps) {
  const [forecastDaily, setForecastDaily] = useState<ForecastDaily[]>([]);
  const [isLoading, setLoading] = useState(false);

  useFocusEffect(useCallback(() => {
    async function LoadForecasts() {
      try {
        setLoading(true)
        const params = {
          lat: route.params.lat,
          lon: route.params.lon,
          exclude: 'hourly,minutely,alerts,current',
        }
  
        const response = await weatherAPI.get('onecall', {params});

        const listForecastDaily: ForecastDaily[] = [] as ForecastDaily[];

        response.data.daily.forEach((item: any) => {
          const date = fromUnixTime(item.dt)

          const forecastitem: ForecastDaily = {
            daylyweek: format(new Date(date), 'EEEE', {locale: eolocale}),
            dt: format(new Date(date), 'dd MMMM yyyy', {locale: eolocale}),
            temp: {
              day: Math.round(item.temp.day),
              max: Math.round(item.temp.max),
              min: Math.round(item.temp.min)
            },
            weather: {
              description: item.weather[0].description
            }
          } 
          listForecastDaily.push(forecastitem)
        })

        setForecastDaily(listForecastDaily)
      } catch (error) {
        Alert.alert('Erro', `${error}`)
      } finally {
        setLoading(false)
      }
    }

    LoadForecasts();
  }, []))

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header title={route.params.main_text} isSearchVisible={false}/>

      <ItemsList 
        data={forecastDaily}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ForeCastCard 
            main_text={item.daylyweek}
            temp={item.temp.day}
            temp_max={item.temp.max}
            temp_min={item.temp.min}
            secondary_text={item.dt}
            weather_description={item.weather.description}
            isVisibleIcon={false}
          />
        )}
      />
    </Container>
  )
}
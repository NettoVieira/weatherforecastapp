import axios, {AxiosInstance} from 'axios';

const api_key = '46efed7b561da2b5c6bfc3db749aa449';
const language = 'pt';

export const weatherAPI: AxiosInstance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
  params: {
    appid: api_key,
    lang: language,
    units: 'metric'
  },

  headers: {
    'Content-Type': 'application/json',
  },
});

export const SearchCitiesAPI: AxiosInstance = axios.create({
  // baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',

 
  baseURL: 'https://brasilapi.com.br/api/ibge/',

  headers: {
    'Content-Type': 'application/json',
  }
})



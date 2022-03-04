import axios, {AxiosInstance} from 'axios';

const api_key = '19c1ceb3a5086b883f472fddbfbfdb9a';
const language = 'pt';

export const weatherAPI: AxiosInstance = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
  params: {
    appid: api_key,
    lang: language,
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



class CitiesSchema {
  static schema = {
    name: 'CitiesSchema',
    primaryKey: 'main_text',
    properties: {
      main_text: 'string',
      secondary_text: 'string',
      temp: 'double',
      weather_description: 'string',
      temp_max: 'double',
      temp_min: 'double',
      lat: 'string',
      lon: 'string'
    },
  };
}

export { CitiesSchema }
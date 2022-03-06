import Realm from 'realm';
import { CitiesSchema } from '../schemas/CitiesSchema'

export function getRealm() {
  return Realm.open({
    path: 'myWeatherAPP',
    schema: [
      CitiesSchema
    ],
    schemaVersion: 3,
  });
}
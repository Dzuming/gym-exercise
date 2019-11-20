import {AppRegistry} from 'react-native';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from './src/model/schema';
import Database from '@nozbe/watermelondb/src/Database';
import Dish from './src/model/Dish';
import {createNavigation} from './src/utils/navigation';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        bodyPart: 'Body part',
        addResultTitle: 'Add Result',
        typeWeight: 'Type here weight!',
        typeAmount: 'Type here amount!',
        typeExercise: 'Type here exercise!',
        typeBodyPart: 'Type here body part!',
        addResult: 'ADD EXERCISE VALUE',
        addExercise: 'ADD EXERCISE',
        addBodyPart: 'ADD BODY PART',
        selectDate: 'select date',
        amount: 'time(s)',
        lastResult: 'last result',
        validateResultError: 'You need to fill in all data!',
        routeTitle: {
          home: 'Home',
          bodyParts: 'Body Parts',
          exercises: 'Exercises',
          results: 'Result',
        },
        routeLabel: {
          home: 'Go to Home',
          bodyParts: 'Go to Body parts',
          exercises: 'Go to Exercises',
          results: 'Add Result',
        },
      },
    },
    pl: {
      tranlsation: {
        bodyPart: 'Część ciała',
        addResultTitle: 'Dodaj rezultat',
        typeWeight: 'Wpisz tutaj wagę!',
        typeAmount: 'Wpisz tutaj ilość!',
        typeExercise: 'Wpisz ćwiczenie tutaj!',
        typeBodyPart: 'Wpisz część ciała tutaj!',
        addResult: 'DODAJ WARTOŚĆ ĆWICZENIA',
        addExercise: 'DODAJ ĆWICZENIE',
        addBodyPart: 'DODAJ CZĘŚĆ CIAŁA',
        selectDate: 'wybierz datę',
        amount: 'raz(y)',
        lastResult: 'ostatni rezultat',
        validateResultError: 'Musisz wypełnić wszystkie dane!',
        routeTitle: {
          home: 'Start',
          bodyParts: 'Części Ciała',
          exercises: 'Ćwiczenia',
          results: 'Wyniki',
        },
        routeLabel: {
          home: 'Idź do strony głównej',
          bodyParts: 'Idź do Części Ciała',
          exercises: 'Idź od Ćwiczeń',
          results: 'Idź do Wyników',
        },
      },
    },
  },
});

const adapter = new SQLiteAdapter({
  dbName: 'WatermelonDemo',
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: [Dish],
  actionsEnabled: true,
});

AppRegistry.registerComponent('gymExercise', () =>
  createNavigation({database}),
);

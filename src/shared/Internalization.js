import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { getLanguage } from '../utils/asyncStorage';
import LanguageProvider from '../providers/LanguageProvider';
import Loader from './Loader';

class Internalization extends Component {
  constructor(props) {
    super(props);
    I18n.translations = {
      en: {
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
          results: 'Result'
        },
        routeLabel: {
          home: 'Go to Home',
          bodyParts: 'Go to Body parts',
          exercises: 'Go to Exercises',
          results: 'Add Result'
        }
      },
      pl: {
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
          results: 'Wyniki'
        },
        routeLabel: {
          home: 'Idź do strony głównej',
          bodyParts: 'Idź do Części Ciała',
          exercises: 'Idź od Ćwiczeń',
          results: 'Idź do Wyników'
        }
      }
    };
    this.state = {
      loading: true,
      language: ''
    };
    I18n.defaultLocale = 'pl';
  }
  async componentDidMount() {
    const language = await getLanguage();
    I18n.locale = language === 'pl' ? language : 'en';

    this.setState({ language });
    this.setState({ loading: false });
  }

  render() {
    const { children } = this.props;
    const { loading, language } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <LanguageProvider language={language}>
        {React.Children.map(children, child => React.cloneElement(child))}
      </LanguageProvider>
    );
  }
}

Internalization.propTypes = {};

export default Internalization;

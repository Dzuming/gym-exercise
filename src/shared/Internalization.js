import React, { Component } from "react";
import I18n from "react-native-i18n";

class Internalization extends Component {
  constructor(props) {
    super(props);
    I18n.translations = {
      en: {
        bodyPart: "Body part",
        addResultTitle: "Add Result",
        typeWeight: "Type here weight!",
        typeAmount: "Type here amount!",
        typeExercise: "Type here exercise!",
        typeBodyPart: "Type here body part!",
        addResult: "ADD EXERCISE VALUE",
        addExercise: "ADD EXERCISE",
        addBodyPart: "ADD BODY PART",
        selectDate: "select date",
        routeTitle: {
          home: "Home",
          bodyParts: "Body Parts",
          exercises: "Exercises",
          results: "Result"
        },
        routeLabel: {
          home: "Go to Home",
          bodyParts: "Go to Body parts",
          exercises: "Go to Exercises",
          results: "Add Result"
        }
      },
      pl: {
        bodyPart: "Część ciała",
        addResultTitle: "Dodaj rezultat",
        typeWeight: "Wpisz tutaj wagę!",
        typeAmount: "Wpisz tutaj ilość!",
        typeExercise: "Wpisz ćwiczenie tutaj!",
        typeBodyPart: "Wpisz część ciała tutaj!",
        addResult: "DODAJ WARTOŚĆ ĆWICZENIA",
        addExercise: "DODAJ ĆWICZENIE",
        addBodyPart: "DODAJ CZĘŚĆ CIAŁA",
        selectDate: "wybierz datę",
        routeTitle: {
          home: "Start",
          bodyParts: "Części Ciała",
          exercises: "Ćwiczenia",
          results: "Wyniki"
        },
        routeLabel: {
          home: "Idź do strony głównej",
          bodyParts: "Idź do Części Ciała",
          exercises: "Idź od Ćwiczeń",
          results: "Idź do Wyników"
        }
      }
    };
    I18n.locale = "pl";
    I18n.fallbacks = true;
  }
  render() {
    const { children } = this.props;
    return children;
  }
}

I18n.propTypes = {};

export default Internalization;

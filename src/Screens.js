import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { screens } from './constants/screens';
import I18n from 'react-native-i18n';
import { toLowerCaseFirstLetter } from './utils/string';
import CustomButton from './components/CustomButton';
import { setLanguage } from './utils/asyncStorage';
import { LanguageContext } from './providers/LanguageProvider';

const screensObject = Object.assign(
  {},
  ...screens.map(screen => ({ [screen.name]: screen.component }))
);

const renderLanguageButton = () => {
  return (
    <LanguageContext.Consumer>
      {context =>
        context.language === 'pl' ? (
          <CustomButton
            onPress={() => {
              setLanguage('en').then(() => {
                context.showLoader();
                context.setLanguage('en');
              });
            }}
            title="pl"
            buttonStyle={{
              marginBottom: 10,
              padding: 10,
              alignItems: 'center'
            }}
          />
        ) : (
          <CustomButton
            onPress={() =>
              setLanguage('pl').then(() => {
                context.showLoader();
                context.setLanguage('pl');
              })
            }
            title="en"
            buttonStyle={{
              marginBottom: 10,
              padding: 10,
              alignItems: 'center'
            }}
          />
        )
      }
    </LanguageContext.Consumer>
  );
};

const renderName = routeName => {
  console.log(routeName);
  return I18n.t(`routeTitle.${toLowerCaseFirstLetter(routeName)}`);
};
const Screens = createStackNavigator(screensObject, {
  navigationOptions: ({ navigation }) => ({
    title: renderName(navigation.state.routeName),
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerRight: renderLanguageButton()
  })
});

export default Screens;

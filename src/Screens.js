import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { screens } from './constants/screens';
import I18n from 'react-native-i18n';
import { toLowerCaseFirstLetter } from './utils/string';
import { setLanguage } from './utils/asyncStorage';
import { LanguageContext } from './providers/LanguageProvider';
import ImageButton from "./components/ImageButton";

const screensObject = Object.assign(
  {},
  ...screens.map(screen => ({ [screen.name]: screen.component }))
);

const renderLanguageButton = () => {
  return (
    <LanguageContext.Consumer>
      {context =>
        context.language === 'pl' ? (
          <ImageButton
            onPress={() => {
              setLanguage('en').then(() => {
                context.showLoader();
                context.setLanguage('en');
              });
            }}
            buttonStyle={{
                padding: 15,
                alignItems: 'center'
            }}
            code={'PL'}
          />
        ) : (
          <ImageButton
            onPress={() =>
              setLanguage('pl').then(() => {
                context.showLoader();
                context.setLanguage('pl');
              })
            }
            buttonStyle={{
                padding: 15,
                alignItems: 'center'
            }}
            code={'GB'}
          />
        )
      }
    </LanguageContext.Consumer>
  );
};

const renderName = routeName => {
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

export default createAppContainer(Screens);

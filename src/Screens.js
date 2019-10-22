import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {screens} from './constants/screens';
import {IScreen} from './types/IScreen';
import {silverChalice, jade} from './constants/colors';

const screensObject = Object.assign(
  {},
  ...screens.map(screen => ({[screen.name]: screen.component})),
);

const Screens = createBottomTabNavigator(screensObject, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColor}) => {
      const {routeName} = navigation.state;
      const currentScreen: IScreen = screens.find(
        (screen: IScreen) => screen.name === routeName,
      );
      return currentScreen.icon(tintColor);
    },
  }),
  tabBarOptions: {
    activeTintColor: jade,
    inactiveTintColor: silverChalice,
    style: {height: 60},
    labelPosition: 'below-icon'
  },
});

export default createAppContainer(Screens);

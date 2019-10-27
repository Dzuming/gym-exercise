import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {screens} from '../constants/screens';
import {IScreen} from '../types/IScreen';
import {silverChalice, jade} from '../constants/colors';
import Timer from '../screens/Timer';

const screensObject = Object.assign(
  {},
  ...screens.map(screen => ({[screen.name]: screen.component})),
);

export const createNavigation = props =>
  createAppContainer(
    createBottomTabNavigator(
      {
        Timer: {
          screen: ({navigation}) => {
            const post = navigation.state.params.database.collections
              .get('posts')
              .query()
              .fetch();
            console.log(navigation)
            return <Timer post={post} />;
          },
        },
      },
      {
        defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({tintColor}) => {
            const {routeName} = navigation.state;
            const currentScreen: IScreen = screens.find(
              (screen: IScreen) => screen.name === routeName,
            );
            return screens[0].icon(tintColor);
          },
        }),
        initialRouteParams: props,
        initialRouteName: 'Timer',
        tabBarOptions: {
          activeTintColor: jade,
          inactiveTintColor: silverChalice,
          style: {height: 60},
          labelPosition: 'below-icon',
        },
      },
    ),
  );

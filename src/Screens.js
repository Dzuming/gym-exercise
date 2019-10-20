import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {screens} from './constants/screens';

const screensObject = Object.assign(
  {},
  ...screens.map(screen => ({[screen.name]: screen.component})),
);

const Screens = createBottomTabNavigator(screensObject);

export default createAppContainer(Screens);

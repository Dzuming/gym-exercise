// @flow

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {silverChalice, jade} from '../constants/colors';
import {Products, Settings, Home, Gym, Timer} from '../screens';
import {TabIcon} from '../components/tab-icon';
import {createStackNavigator} from 'react-navigation-stack';
import MealsHome from '../screens/MealsHome';

const MealsStackNavigation = props =>
  createStackNavigator(
    {
      MealsHome: {
        screen: navigate => {
          return <MealsHome navigate={navigate.navigation.navigate} />;
        },
      },
      Products: {
        screen: () => {
          const {database} = props;
          const fetchDishes = database.collections
            .get('dishes')
            .query()
            .fetch();
          return <Products fetchDishes={fetchDishes} />;
        },
      },
    },
    {
      headerMode: 'none',
    },
  );

const BottomNavigation = props =>
  createBottomTabNavigator(
    {
      Timer: {
        screen: () => {
          return <Timer />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <TabIcon name={'timer'} color={tintColor} />
          ),
        }),
      },
      Meals: {
        screen: MealsStackNavigation(props),
        navigationOptions: () => ({
          visible: false,
          tabBarIcon: ({tintColor}) => (
            <TabIcon name={'local-dining'} color={tintColor} />
          ),
        }),
      },
      Home: {
        screen: () => {
          return <Home />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <TabIcon name={'home'} color={tintColor} />
          ),
        }),
      },
      Gym: {
        screen: () => {
          return <Gym />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <TabIcon name={'fitness-center'} color={tintColor} />
          ),
        }),
      },
      Settings: {
        screen: () => {
          return <Settings />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <TabIcon name={'settings-input-composite'} color={tintColor} />
          ),
        }),
      },
    },
    {
      initialRouteParams: props,
      initialRouteName: 'Timer',
      tabBarOptions: {
        activeTintColor: jade,
        inactiveTintColor: silverChalice,
        style: {height: 60},
        labelPosition: 'below-icon',
      },
    },
  );

const mainNavigation = props =>
  createSwitchNavigator({
    Home: BottomNavigation(props),
  });

export const createNavigation = props =>
  createAppContainer(mainNavigation(props));

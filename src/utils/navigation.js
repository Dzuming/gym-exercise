import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {silverChalice, jade} from '../constants/colors';
import {Meals, Settings, Home, Gym, Timer} from '../screens';
import {TabIcon} from '../components/tab-icon';
export const createNavigation = props =>
  createAppContainer(
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
          screen: () => {
            const {database} = props;
            const dishesCollection = database.collections.get('dishes');
            const fetchDishes = dishesCollection.query().fetch();
            return <Meals fetchDishes={fetchDishes} />;
          },
          navigationOptions: () => ({
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
    ),
  );

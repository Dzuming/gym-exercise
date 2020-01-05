/**
 *@flow strict-local
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator, type NavigationState, type NavigationParams} from 'react-navigation';
import type {NavigationContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {jade, silverChalice} from '../constants/colors';
import {Gym, Home, Products, Settings, Timer} from '../screens';
import {TabIcon} from '../components/tab-icon';
import {createStackNavigator} from 'react-navigation-stack';
import MealsHome from '../screens/MealsHome';
import type Database from '@nozbe/watermelondb/src/Database';
import {Tables} from '../model/schema.js';
import type Model from '@nozbe/watermelondb/src/Model';
import type {IProduct} from '../types/IMeals';

type IProps = NavigationParams & {
  database: Database,
};

const MealsStackNavigation = (props: IProps) =>
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
          const productCollection: Relation<Model[]> = database.collections.get(Tables.products);
          const createProduct = async (newProduct: IProduct): Promise<Model[]> =>
            await database.action(async () => {
              await productCollection.create((product: IProduct) => {
                product.carbon = newProduct.carbon;
                product.fat = newProduct.fat;
                product.name = newProduct.name;
                product.protein = newProduct.protein;
                product.image = newProduct.image;
                product.unit = newProduct.unit;
              });
            });
          return <Products database={database} createProduct={createProduct} />;
        },
      },
    },
    {
      headerMode: 'none',
    },
  );

const BottomNavigation = (props: IProps) =>
  createBottomTabNavigator(
    {
      Timer: {
        screen: () => {
          return <Timer />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => <TabIcon name={'timer'} color={tintColor} />,
        }),
      },
      Meals: {
        screen: MealsStackNavigation(props),
        navigationOptions: () => ({
          visible: false,
          tabBarIcon: ({tintColor}) => <TabIcon name={'local-dining'} color={tintColor} />,
        }),
      },
      Home: {
        screen: () => {
          return <Home />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => <TabIcon name={'home'} color={tintColor} />,
        }),
      },
      Gym: {
        screen: () => {
          return <Gym />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => <TabIcon name={'fitness-center'} color={tintColor} />,
        }),
      },
      Settings: {
        screen: () => {
          return <Settings />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => <TabIcon name={'settings-input-composite'} color={tintColor} />,
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

const mainNavigation = (props: IProps) =>
  createSwitchNavigator({
    Home: BottomNavigation(props),
  });

export const createNavigation = (props: IProps): NavigationContainer<NavigationState, {...}, IProps> => {
  return createAppContainer(mainNavigation(props));
};

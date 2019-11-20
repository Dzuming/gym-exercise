// @flow

import React, {useEffect, useState, StatelessFunctionalComponent} from 'react';
import {AppView} from '../components/app-view';
import {FlatList} from 'react-native';
import {Dish} from '../components/dish';
import type {IDish} from '../types/IMeals';

interface IProps {
  fetchDishes: () => void;
}

const Meals: StatelessFunctionalComponent<IProps> = ({
  fetchDishes,
}): React$Element => {
  const [dishes, setDishes] = useState<IDish[]>([]);
  useEffect(() => {
    async function getDishes() {
      setDishes(await fetchDishes);
    }
    getDishes();
  }, [fetchDishes]);
  return (
    <AppView title={'Meals'}>
      <FlatList
        data={dishes}
        renderItem={({item}) => <Dish dish={item} />}
        keyExtractor={item => item.id}
      />
    </AppView>
  );
};

export default Meals;

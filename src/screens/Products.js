// @flow

import * as React from 'react';
import {AppView} from '../components/app-view';
import {FlatList} from 'react-native';
import {Dish} from '../components/meals/dish';
import type {IDish} from '../types/IMeals';

interface IProps {
  fetchDishes: () => void;
}

const Products: React.StatelessFunctionalComponent<IProps> = ({
  fetchDishes,
}): React$Element => {
  const [dishes, setDishes] = React.useState<IDish[]>([]);
  React.useEffect(() => {
    async function getDishes() {
      setDishes(await fetchDishes);
    }
    getDishes();
  }, [fetchDishes]);
  return (
    <AppView title={'Products'}>
      <FlatList
        data={dishes}
        renderItem={({item}) => <Dish dish={item} />}
        keyExtractor={item => item.id}
      />
    </AppView>
  );
};

export default React.memo(Products);

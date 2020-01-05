/**
 * @flow strict-local
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {FlatList} from 'react-native';
import {Dish} from '../components/meals/product';
import {FabButton} from '../components/shared/buttons/fab-button';
import {Modal} from '../components/shared/modal';
import {AddProduct} from '../components/meals/add-product';
import type Model from '@nozbe/watermelondb/src/Model';
import type {IDish} from '../types/IMeals';
import withObservables from '@nozbe/with-observables';
import type Database from '@nozbe/watermelondb/src/Database';
import {Tables} from '../model/schema';

type IProps = {
  dishes: Model[],
  database: Database,
  createProduct: (newProduct: IDish) => Promise<Model[]>,
};

function Products({dishes, createProduct}: IProps): React.Node {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <AppView title={'Products'} isLoading={!dishes}>
      <FlatList data={dishes} renderItem={({item}) => <Dish dish={item} />} keyExtractor={item => item.id} />
      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} title={'Add Product'}>
        <AddProduct createProduct={createProduct} handleCancel={() => setModalOpen(false)} />
      </Modal>
      <FabButton action={() => setModalOpen(true)} />
    </AppView>
  );
}

const enhance = withObservables(['dishes'], ({database}) => ({
  dishes: database.collections.get(Tables.dishes).query().observe(),
}));

export default (React.memo<IProps>(enhance(Products)): React.AbstractComponent<IProps>);

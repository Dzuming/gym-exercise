/**
 * @flow strict-local
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {FlatList} from 'react-native';
import {Product} from '../components/meals/product';
import {FabButton} from '../components/shared/buttons/fab-button';
import {Modal} from '../components/shared/modal';
import {AddProduct} from '../components/meals/add-product';
import type Model from '@nozbe/watermelondb/src/Model';
import type {IProduct} from '../types/IMeals';
import withObservables from '@nozbe/with-observables';
import type Database from '@nozbe/watermelondb/src/Database';
import {Tables} from '../model/schema';
import {NoItems} from '../components/shared/no-items';

type IProps = {
  products: Model[],
  database: Database,
  createProduct: (newProduct: IProduct) => Promise<Model[]>,
};

function Products({products, createProduct}: IProps): React.Node {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <AppView title={'Products'} isLoading={!products}>
      {products.length > 0 ? (
        <FlatList data={products} renderItem={({item}) => <Product product={item} />} keyExtractor={item => item.id} />
      ) : (
        <NoItems text={'No Products'} />
      )}
      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} title={'Add Product'}>
        <AddProduct createProduct={createProduct} handleCancel={() => setModalOpen(false)} />
      </Modal>
      <FabButton action={() => setModalOpen(true)} />
    </AppView>
  );
}

const enhance = withObservables(['products'], ({database}) => ({
  products: database.collections
    .get(Tables.products)
    .query()
    .observe(),
}));

export default (React.memo<IProps>(enhance(Products)): React.AbstractComponent<IProps>);

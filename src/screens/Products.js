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

type IProps = {
  fetchDishes: Promise<Model[]>,
};

function Products({fetchDishes}: IProps): React.Node {
  const [dishes, setDishes] = React.useState<Model[] | void>();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    async function getDishes() {
      setDishes(await fetchDishes);
    }
    getDishes();
  }, [fetchDishes]);
  return (
    <AppView title={'Products'} isLoading={!dishes}>
      <FlatList
        data={dishes}
        renderItem={({item}) => <Dish dish={item} />}
        keyExtractor={item => item.id}
      />
      <Modal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        title={'Add Product'}>
        <AddProduct handleCancel={() => setModalOpen(false)} />
      </Modal>
      <FabButton action={() => setModalOpen(true)} />
    </AppView>
  );
}

export default (React.memo<IProps>(Products): React.AbstractComponent<IProps>);

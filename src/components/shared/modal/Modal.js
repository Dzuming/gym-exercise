/**
 * @flow strict
 */

import * as React from 'react';
import {Modal as RnModal} from 'react-native';
import {AppView} from '../../app-view';

type IProps = {
  isOpen: boolean,
  title: string,
  handleClose: () => void,
  children: React.Node,
};

function Modal({isOpen, title, handleClose, children}: IProps): React.Node {
  return (
    <RnModal
      animationType="fade"
      transparent={false}
      visible={isOpen}
      onRequestClose={handleClose}>
      <AppView title={title}>{children}</AppView>
    </RnModal>
  );
}

export default (React.memo<IProps>(Modal): React.AbstractComponent<IProps>);

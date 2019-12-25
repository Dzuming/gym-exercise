/**
 * @flow strict
 */

import * as React from 'react';
import {TextInput} from '../../shared/fields/text-input';
import {CancelButton} from '../../shared/buttons/cancel-button';
import {SubmitButton} from '../../shared/buttons/submit-button';

type IProps = {
  handleCancel: () => void,
};

function AddProduct({handleCancel}: IProps): React.Node {
  return (
    <>
      <TextInput value={'test'} onChangeText={() => console.log('works')} />
      <CancelButton onPress={handleCancel} />
      <SubmitButton onPress={() => console.log('works')} />
    </>
  );
}

export default (React.memo<IProps>(
  AddProduct,
): React.AbstractComponent<IProps>);

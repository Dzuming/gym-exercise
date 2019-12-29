/**
 * @flow strict
 */

import * as React from 'react';
import {TextInput} from '../../shared/fields/text-input';
import {CancelButton} from '../../shared/buttons/cancel-button';
import {SubmitButton} from '../../shared/buttons/submit-button';
import {useForm} from 'react-hook-form';
import {Text} from 'react-native';
import {SelectInput} from '../../shared/fields/select-input';
import {useMemo} from 'react';

type IProps = {
  handleCancel: () => void,
};

function AddProduct({handleCancel}: IProps): React.Node {
  const {register, setValue, handleSubmit, watch} = useForm();
  const watchUnit = watch('unit', 'gr');
  const onSubmit = (data, e) => {
    console.log('Submit event', e);
    console.log('data', data);
  };
  return (
    <>
      <Text>Name</Text>
      <TextInput
        register={register}
        setValue={setValue}
        name={'name'}
        placeholder={'Enter a name'}
      />
      <Text>Unit</Text>
      <SelectInput
        register={register}
        setValue={setValue}
        selectedValue={watchUnit}
        name={'unit'}
        options={[
          {
            label: 'gr',
            value: 'gr',
          },
          {
            label: 'ml',
            value: 'ml',
          },
        ]}
      />
      <TextInput
        register={register}
        setValue={setValue}
        name={'protein'}
        placeholder={'Enter a protein value'}
      />
      <TextInput
        register={register}
        setValue={setValue}
        name={'carbon'}
        placeholder={'Enter a carbon value'}
      />
      <TextInput
        register={register}
        setValue={setValue}
        name={'fat'}
        placeholder={'Enter a fat value'}
      />
      <CancelButton onPress={handleCancel} />
      <SubmitButton onPress={handleSubmit(onSubmit)} />
    </>
  );
}

export default (React.memo<IProps>(
  AddProduct,
): React.AbstractComponent<IProps>);

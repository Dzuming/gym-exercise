/**
 * @flow strict
 */

import * as React from 'react';
import {TextInput} from '../../shared/fields/text-input';
import {CancelButton} from '../../shared/buttons/cancel-button';
import {useForm} from 'react-hook-form';
import {KeyboardAvoidingView, Text} from 'react-native';
import {SelectInput} from '../../shared/fields/select-input';
import addProductSchema from '../../../validators/addProductSchema';
import type {IProduct} from '../../../types/IMeals';
import type Model from '@nozbe/watermelondb/Model';
import {SubmitButton} from '../../shared/buttons/submit-button';
import {AppView} from '../../app-view';
import {useState} from 'react';

type IProps = {
  createProduct: (newProduct: IProduct) => Promise<Model[]>,
  handleCancel: () => void,
};

function AddProduct({createProduct, handleCancel}: IProps): React.Node {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {register, setValue, handleSubmit, watch, errors} = useForm({
    validationSchema: addProductSchema,
    defaultValues: {
      unit: 'g',
    },
  });
  const watchUnit = watch('unit');
  const onSubmit = async (data: IProduct) => {
    try {
      setIsLoading(true);
      await createProduct(data);
      handleCancel();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <AppView title={'Add product'} isLoading={isLoading}>
        <Text>Name</Text>
        <TextInput register={register} setValue={setValue} name={'name'} errors={errors} placeholder={'Enter a name'} />
        <Text>Unit</Text>
        <SelectInput
          register={register}
          setValue={setValue}
          selectedValue={watchUnit}
          name={'unit'}
          options={[
            {
              label: 'g',
              value: 'g',
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
          errors={errors}
          placeholder={'Enter a protein value'}
          keyboardType={'number-pad'}
        />
        <TextInput
          register={register}
          setValue={setValue}
          name={'carbon'}
          errors={errors}
          placeholder={'Enter a carbon value'}
          keyboardType={'number-pad'}
        />
        <TextInput
          register={register}
          setValue={setValue}
          name={'fat'}
          errors={errors}
          placeholder={'Enter a fat value'}
          keyboardType={'number-pad'}
        />
        <CancelButton onPress={handleCancel} />
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </AppView>
    </KeyboardAvoidingView>
  );
}

export default (React.memo<IProps>(AddProduct): React.AbstractComponent<IProps>);

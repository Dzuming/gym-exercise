/**
 * @flow strict
 */

import * as React from 'react';
import {TextInput as TextInputRn} from 'react-native';
import {RHFInput} from 'react-hook-form-input';

type IProps = {
  register: string,
  setValue: () => void,
  name: string,
  placeholder?: string,
};

function TextInput({
  register,
  setValue,
  name,
  placeholder,
}: IProps): React.Node {
  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });
  return (
    <RHFInput
      placeholder={placeholder}
      register={register}
      setValue={setValue}
      as={<TextInputRn />}
      onChangeEvent={onChange}
      name={name}
    />
  );
}

export default (React.memo<IProps>(TextInput): React.AbstractComponent<IProps>);

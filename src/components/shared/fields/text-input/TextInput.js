/**
 * @flow strict
 */

import * as React from 'react';
import {KeyboardTypeOptions, TextInput as TextInputRn} from 'react-native';
import {RHFInput} from 'react-hook-form-input';
import {StyledErrorMessage} from '../../styles/text';
import {ErrorMessage} from 'react-hook-form';
import {StyledView} from './styles';

type IProps = {
  register: string,
  setValue: () => void,
  name: string,
  error?: string,
  placeholder?: string,
  keyboardType?: KeyboardTypeOptions,
};

function TextInput({
  register,
  setValue,
  name,
  errors,
  placeholder,
  keyboardType,
}: IProps): React.Node {
  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });
  return (
    <StyledView>
      <RHFInput
        placeholder={placeholder}
        register={register}
        setValue={setValue}
        as={<TextInputRn />}
        onChangeEvent={onChange}
        name={name}
        keyboardType={keyboardType}
      />
      <ErrorMessage as={<StyledErrorMessage />} errors={errors} name={name} />
    </StyledView>
  );
}

export default (React.memo<IProps>(TextInput): React.AbstractComponent<IProps>);

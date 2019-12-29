/**
 * @flow strict
 */

import * as React from 'react';
import {Picker} from 'react-native';
import {RHFInput} from 'react-hook-form-input';

type IProps = {
  register: string,
  setValue: () => void,
  selectedValue: string,
  name: string,
  options: Array<{label: string, value: string}>,
};

function SelectInput({
  register,
  setValue,
  selectedValue,
  name,
  options,
}: IProps): React.Node {
  const onChange = (value: string) => {
    setValue(name, value);
  };
  return (
    <RHFInput
      register={register}
      setValue={setValue}
      onValueChange={onChange}
      as={
        <Picker selectedValue={selectedValue}>
          {options.map(
            (option: {label: string, value: string}, index: number) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ),
          )}
        </Picker>
      }
      name={name}
    />
  );
}

export default (React.memo<IProps>(
  SelectInput,
): React.AbstractComponent<IProps>);

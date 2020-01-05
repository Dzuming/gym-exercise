/**
 * @flow strict
 */

import * as yup from 'yup';

const addProductSchema = yup.object().shape({
  name: yup.string().required(),
  unit: yup.string().required(),
  protein: yup.number().required(),
  carbon: yup.number().required(),
  fat: yup.number().required(),
});

export default addProductSchema;

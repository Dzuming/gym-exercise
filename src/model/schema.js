/**
 * @flow strict-local
 */

import {
  appSchema,
  tableSchema,
  tableName,
  columnName,
} from '@nozbe/watermelondb';

import type {
  ColumnName,
  TableName,
  AppSchema,
} from '@nozbe/watermelondb/src/Schema';

import type Dish from './Dish';

export const Tables = {
  dishes: (tableName('dishes'): TableName<Dish>),
};

export const Columns = {
  dishes: {
    name: (columnName('name'): ColumnName),
    unit: (columnName('unit'): ColumnName),
    protein: (columnName('protein'): ColumnName),
    carbon: (columnName('carbon'): ColumnName),
    fat: (columnName('fat'): ColumnName),
    image: (columnName('image'): ColumnName),
  },
};

export const mySchema: AppSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: Tables.dishes,
      columns: [
        {name: Columns.dishes.name, type: 'string'},
        {name: Columns.dishes.unit, type: 'string'},
        {name: Columns.dishes.protein, type: 'number'},
        {name: Columns.dishes.carbon, type: 'number'},
        {name: Columns.dishes.fat, type: 'number'},
        {name: Columns.dishes.image, type: 'string', isOptional: true},
      ],
    }),
  ],
});

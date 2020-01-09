/**
 * @flow strict-local
 */

import {appSchema, tableSchema, tableName, columnName} from '@nozbe/watermelondb';

import type {ColumnName, TableName, AppSchema} from '@nozbe/watermelondb/src/Schema';

import type Product from './Product';

export const Tables = {
  products: (tableName('products'): TableName<Product>),
};

export const Columns = {
  products: {
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
      name: Tables.products,
      columns: [
        {name: Columns.products.name, type: 'string'},
        {name: Columns.products.unit, type: 'string'},
        {name: Columns.products.protein, type: 'number'},
        {name: Columns.products.carbon, type: 'number'},
        {name: Columns.products.fat, type: 'number'},
        {name: Columns.products.image, type: 'string', isOptional: true},
      ],
    }),
  ],
});

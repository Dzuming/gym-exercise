/**
 * @flow strict-local
 */

import {field} from '@nozbe/watermelondb/decorators';
import {Model} from '@nozbe/watermelondb';
import {Tables, Columns} from './schema';
import type {TableName} from '@nozbe/watermelondb/src/Schema';

const Column = Columns.dishes;

export default class Dish extends Model {
  static table: TableName<Dish> = Tables.dishes;
  @field(Column.name) name: string;
  @field(Column.unit) unit: string;
  @field(Column.protein) protein: number;
  @field(Column.carbon) carbon: number;
  @field(Column.fat) fat: number;
  @field(Column.image) image: string;
}

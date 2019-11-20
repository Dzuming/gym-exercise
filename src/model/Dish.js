import {field} from '@nozbe/watermelondb/decorators';
import {Model} from '@nozbe/watermelondb';

export default class Dish extends Model {
  static table = 'dishes';
  @field('name') name;
  @field('unit') unit;
  @field('protein') protein;
  @field('carbon') carbon;
  @field('fat') fat;
  @field('image') image;
}

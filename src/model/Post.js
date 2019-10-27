import {field} from '@nozbe/watermelondb/decorators';
import {Model} from '@nozbe/watermelondb';

export default class Post extends Model {
  static table = 'posts';
  @field('title') title;
  @field('body') body;
}

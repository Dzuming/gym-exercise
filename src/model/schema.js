// model/schema.js
import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'dishes',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'unit', type: 'string'},
        {name: 'protein', type: 'number'},
        {name: 'carbon', type: 'number'},
        {name: 'fat', type: 'number'},
        {name: 'image', type: 'string', isOptional: true},
      ],
    }),
  ],
});

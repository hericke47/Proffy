import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });    
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}
// como esta escrito em typescript devemos sobrescrever o metodo do knex pois ele
//é em javascript
// "knex:migrate": "knex --knexfile knexfile.ts migrate:latest" no package.json
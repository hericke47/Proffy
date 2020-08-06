import knex from 'knex';
import path from 'path';

// knex faz a conexão com o banco

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;
const knex = require('knex');

//not best practice
const config = {
    client: 'sqlite3',
    connection: {
        filename: '.data/users.db3'
    },
    useNullAsDefault: true
};

const db = knex(config);
//knex is now connected to the database and it's giving us this config object

module.exports = db;
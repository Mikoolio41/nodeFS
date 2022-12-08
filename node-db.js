const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "Hollywood2",
  },
});

module.exports = { db };

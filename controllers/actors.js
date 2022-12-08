const db = require("../node-db");

const getQuery = (req, res) => {
  db.select()
    .from("actors")
    .then((actors) => res.send(actors));
};

module.exports = { getQuery };

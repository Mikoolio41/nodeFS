const express = require("express");
const app = express();
// const products = require("./modules/modules.js");
const { db } = require("./node-db.js");
const { router } = require("./routes/routes.js");

// server listening on port
app.listen(3001, () => {
  console.log("listening on port 3001");
});

// middlewares
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/products", router);

app.get("/actors", (req, res) => {
  db.select("first_name")
    .from("actor")
    .where({ actor_id: 1 })
    .then((actors) => res.send(actors));
});

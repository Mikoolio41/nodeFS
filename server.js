const express = require("express");
const app = express();
const { db } = require("./node-db.js");
const { router } = require("./routes/products.js");

// server listening on port
app.listen(3001, () => {
  console.log("listening on port 3001");
});

app.set("view engine", "ejs");

// middlewares
// app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/products", router);
app.use("/api/actors", router);

app.get("/", (req, res) => {
  res.render("index");
});

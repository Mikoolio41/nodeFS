const express = require("express");
const app = express();
const products = require("./modules/modules.js");

// server listening on port
app.listen(3000, () => {
  console.log("listening on port 3000");
});

// middlewares
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get request root
app.get("/", (req, res) => {
  res.json("homepage");
});

// get request /api/products response array of all products
app.get("/api/products", (req, res) => {
  console.log("listening");
  res.json(products);
});

// get request using params
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ msg: "not found" });
  }
  res.json(product);
});

// get request using query string
app.get("/api/search", (req, res) => {
  const name = req.query.q;
  console.log(req.query);
  const prodFilter = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (prodFilter < 1) {
    return res.status(200).json({ msg: "product not found" });
  }
  res.json(prodFilter);
});

// post request
app.post("/api/products", (req, res) => {
  console.log("req body: ", req.body);
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.json(products);
});

app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((item) => item.id == id);
  if (index == -1) {
    return res.status(404).json({ msg: "not found" });
  }
  const updated = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  res.status(200).json(updated);
});

app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((item) => item.id == id);
  if (index == -1) {
    return res.status(404).json({ msg: "not found" });
  }
  products.splice(index, 1);
  res.json({ msg: "product deleted", products });
});

const products = require("../modules/modules.js");

const getProducts = (req, res) => {
  console.log("listening");
  res.json(products);
};

const productParams = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ msg: "not found" });
  }
  res.json(product);
};

const productQuery = (req, res) => {
  const name = req.query.q;
  console.log(req.query);
  const prodFilter = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (prodFilter < 1) {
    return res.status(200).json({ msg: "product not found" });
  }
  res.json(prodFilter);
};

const addProduct = (req, res) => {
  console.log("req body: ", req.body);
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.json(products);
};

const updateProd = (req, res) => {
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
};

const deleteProd = (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((item) => item.id == id);
  if (index == -1) {
    return res.status(404).json({ msg: "not found" });
  }
  products.splice(index, 1);
  res.json({ msg: "product deleted", products });
};

module.exports = {
  getProducts,
  productParams,
  productQuery,
  addProduct,
  updateProd,
  deleteProd,
};

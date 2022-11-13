const express = require("express");
const {
  getProducts,
  productParams,
  productQuery,
  addProduct,
  updateProd,
  deleteProd,
} = require("../controllers/controller");
const router = express.Router();

// router.get("/", getProducts);
// router.get("/:id", productParams);
// router.get("/search", productQuery);
// router.post("/", addProduct);
// router.put("/:id", updateProd);
// router.delete("/:id", deleteProd);

module.exports = { router };

const express = require("express");
const router = express.Router();
const authUser = require("../middleware/auth");

const { getAllProduct } = require("../controllers/products");

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/crudProduct");

router.route("/").get(getAllProduct).post(authUser, createProduct);
router
  .route("/:id")
  .get(authUser, getProduct)
  .delete(authUser, deleteProduct)
  .patch(authUser, updateProduct);

module.exports = router;

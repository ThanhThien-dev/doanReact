const Product = require("../models/product");
const { BadRequest, NotFoundError } = require("../error");
const { StatusCodes } = require("http-status-codes");

const getProduct = async (req, res) => {
  const {
    params: { id: productID },
  } = req;

  const product = await Product.findOne({
    _id: productID,
  });

  if (!product) {
    throw new NotFoundError(`No product with id: ${productID}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const createProduct = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const updateProduct = async (req, res) => {
  const {
    body: { price, name },
    params: { id: productID },
  } = req;

  if (price === "" || name === "") {
    throw new BadRequest("Must provide company or name");
  }

  const product = await Product.findByIdAndUpdate(
    { _id: productID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!product) {
    throw new NotFoundError(`No product with id: ${productID}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  const {
    params: { id: productID },
  } = req;

  const product = await Product.findByIdAndRemove({
    _id: productID,
  });

  if (!product) {
    throw new NotFoundError(`No product with id: ${productID}`);
  }

  res.status(StatusCodes.OK).send();
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };

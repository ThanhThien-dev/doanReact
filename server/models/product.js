const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "product name must be provided"],
      cast: false,
    },
    price: {
      type: Number,
      require: [true, "product price must be provided"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 1,
    },
    company: {
      type: String,
      enum: {
        values: ["Casio", "Citizen", "Doxa", "Tissot", "Seiko"],
        message: "{VALUE} is not supported",
      },
      default: "ikea",
    },
    gender: {
      type: String,
      enum: {
        values: ["Nam", "Nữ"],
        message: "{VALUE} is not supported",
      },
      default: "Nam",
    },
    picture: {
      type: String,
      default: "1.png",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

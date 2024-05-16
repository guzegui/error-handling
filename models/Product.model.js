const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const productSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Name is required."],
    },
    price: {
      type: Number,
    },
    expirationDate: {
        type: Date,
        required: [true, "Expiration date is required."],
    },
    category: {
        type: String,
        enum: ["electronics", "food", "clothes", "other"],
        required: [true, "Category is required."],
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;

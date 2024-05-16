const validateProduct = (req, res, next) => {
  const { name, price, expirationDate, category } = req.body;

  if (!name || !price || !expirationDate || !category) {
    res.status(400).json("Product doesn't have all fields.");
  } else if (price < 0 || typeof price !== "number") {
    res.status(400).json("Product price is not valid.");
  } else if (
    !["electronics", "food", "clothes", "other"].includes(category) ||
    typeof category !== "string"
  ) {
    res.status(400).json("Product category is not valid.");
  } else if (new Date(expirationDate) < Date.now()) {
    res.status(400).json("Product expiration date is not valid.");
  } else {
    next();
  }
};

module.exports = {
  validateProduct,
};

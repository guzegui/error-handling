const router = require("express").Router();

const Products = require("./../models/Product.model");

const { validateProduct } = require("../error-handling/products-errors");

router.get("/", (req, res, next) => {
  Products.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {

    const { id } = req.params;
    Products.findById(id)
      .then((product) => res.json(product))
      .catch((error) => next(error));
  });

router.post("/", validateProduct, (req, res, next) => {
  Products.create(req.body)
    .then((newProduct) => {
      res.json(newProduct);
    })
    .catch((err) => next(err));
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Products.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id)
    .then((deletedProduct) => {
      res.json(deletedProduct);
    })
    .catch((err) => next(err));
});

module.exports = router;

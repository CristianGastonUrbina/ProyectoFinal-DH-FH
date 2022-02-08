let express = require("express");
let ApiProductController = require("../controllers/apis/productController");
let ApiProductRouter = express.Router();

ApiProductRouter.get("/Products", ApiProductController.list);
ApiProductRouter.get("/Products/:id", ApiProductController.detail);

module.exports = ApiProductRouter;

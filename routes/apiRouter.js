let express = require("express");
let ApiProductController = require("../controllers/apis/productController");
let ApiRouter = express.Router();
let ApiUserController = require("../controllers/apis/userController");
let ApiCategoryController = require("../controllers/apis/categoryController");

ApiRouter.get("/Products", ApiProductController.list);
ApiRouter.get("/Products/:id", ApiProductController.detail);
ApiRouter.get("/Users", ApiUserController.list);
ApiRouter.get("/Users/:id", ApiUserController.detail);
ApiRouter.get("/Categorys", ApiCategoryController.list);

module.exports = ApiRouter;

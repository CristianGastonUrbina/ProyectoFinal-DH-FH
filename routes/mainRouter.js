let express = require("express");
let mainController = require("../controllers/mainController");
let mainRouter = express.Router();

mainRouter.get("/", mainController.index);
mainRouter.get("/index", mainController.index);

module.exports = mainRouter;

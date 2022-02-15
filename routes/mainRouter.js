let express = require("express");
let mainController = require("../controllers/mainController");
const adminValidator = require("../middlewares/adminValidator");
let mainRouter = express.Router();

mainRouter.get("/", mainController.index);
mainRouter.get("/index", mainController.index);
mainRouter.get("/indexAdmin",adminValidator,mainController.index)

module.exports = mainRouter;

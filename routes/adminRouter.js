let express = require("express");
let adminRouter = express.Router();
let adminController = require("../controllers/adminController");

adminRouter.get("/index", adminController.index);

module.exports = adminRouter;

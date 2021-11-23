let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");
let upload = require("../middlewares/multerUsers");
const expressValidator = require("../middlewares/expValidator");
const { body } = require("express-validator");

router.get("/login", userController.login);
router.post("/login", userController.checkLogin);

router.get("/register", userController.register);
router.post(
  "/register",
  upload.single("image"),
  expressValidator.registerValidations,
  userController.postRegister
);

router.get("/", userController.list);
router.get("/Detalle/:id", userController.detail);

router.get("/editUser", userController.update);
router.put("/editUser", upload.single("image"), userController.putUpdate);

router.delete("/Detalle/unregister/:id", userController.destroy);

module.exports = router;

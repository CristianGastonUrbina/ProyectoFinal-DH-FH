let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");
let upload = require("../middlewares/multerUsers");
const expressValidator = require("../middlewares/expValidator");
const { body } = require("express-validator");
let admin = require("../middlewares/adminValidator");
let guest = require("../middlewares/guestValidator");
let user=require("../middlewares/userValidator");
let checkEmail = require("../middlewares/checkEmail");

router.get("/login", user, userController.login);
router.post(
  "/login",
  expressValidator.loginValidations,
  userController.checkLogin
);

router.get("/register", userController.register);
router.post(
  "/register",
  upload.single("image"),
  expressValidator.registerValidations,
  checkEmail,
  userController.postRegister
);

router.get("/", userController.list);
router.get("/Detalle/:id", userController.detail);

router.get("/editUser", userController.update);
router.put(
  "/editUser",
  upload.single("image"),
  admin,
  userController.putUpdate
);

router.delete("/unregister/:id", userController.destroy);

module.exports = router;

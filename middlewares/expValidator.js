const { body } = require("express-validator");
const path = require("path");

const expressValidator = {
  registerValidations: [
    body("first_name")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isLength({ min: 2 })
      .withMessage("Debe tener al menos 2 caracteres"),
    body("last_name")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isLength({ min: 2 })
      .withMessage("Debe tener al menos 2 caracteres"),
    body("email")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isEmail()
      .withMessage("Ingresa un Email Valido"),
    body("password")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isStrongPassword()
      .withMessage(
        "Debe tener al menos 8 caracteres, una mayuscula,una minuscula, un numero y un simbolo"
      ),
    body("phone").notEmpty().withMessage("Campo Obligatorio"),
    body("zip").notEmpty().withMessage("Campo Obligatorio"),
    body("image").custom((value, { req }) => {
      let file = req.file;

      let extensionesAceptadas = [".jpeg", ".jpg", ".png", ".gif"];
      if (!file) {
      } else {
        let extensionDelArchivo = path.extname(file.originalname);
        console.log("la extensiond el archivo es ");
        console.log(extensionDelArchivo);
        if (!extensionesAceptadas.includes(extensionDelArchivo)) {
          throw new Error(
            `Las extensiones validas son ${extensionesAceptadas.join(",")}`
          );
        }
      }
      return true;
    }),
  ],

  loginValidations: [
    body("email")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isEmail()
      .withMessage("Ingresa un Email Valido"),
    body("password").notEmpty().withMessage("Campo Obligatorio"),
  ],

  prodValidation: [
    body("name")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isLength({ min: 5 })
      .withMessage("Debe tener al menos 5 caracteres"),
    body("brand").notEmpty().withMessage("Campo Obligatorio"),
    body("model").notEmpty().withMessage("Campo Obligatorio"),
    body("description")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isLength({ min: 20 })
      .withMessage("Minimo de 20 caracteres"),
    body("price")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isNumeric()
      .withMessage("Debe ser un numero"),
    body("warranty")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .isNumeric()
      .withMessage("Debe ser un numero"),
    body("image").custom((value, { req }) => {
      let file = req.file;

      let extensionesAceptadas = [".jpeg", ".jpg", ".png", ".gif"];
      if (!file) {
      } else {
        let extensionDelArchivo = path.extname(file.originalname);
        console.log("la extensiond el archivo es ");
        console.log(extensionDelArchivo);
        if (!extensionesAceptadas.includes(extensionDelArchivo)) {
          throw new Error(
            `Las extensiones validas son ${extensionesAceptadas.join(",")}`
          );
        }
      }
      return true;
    }),
  ],
};
module.exports = expressValidator;

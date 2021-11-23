const { body } = require("express-validator");
const path = require("path");

const expressValidator = {
  registerValidations: [
    body("firstname").notEmpty().withMessage("Campo Obligatorio"),
    body("lastname").notEmpty().withMessage("Campo Obligatorio"),
    body("email")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isEmail()
      .withMessage("Ingresa un Emial Valido"),
    body("password").notEmpty().withMessage("Campo Obligatorio"),
    body("phone").notEmpty().withMessage("Campo Obligatorio"),
    body("zip").notEmpty().withMessage("Campo Obligatorio"),
    body("image").custom((value, { req }) => {
      let file = req.file;

      let extensionesAceptadas = [".jpg", ".png", ".gif"];
      if (!file) {
        throw new Error("Pone una imagen");
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
    }),
  ],
};
path.filextname;
module.exports = expressValidator;

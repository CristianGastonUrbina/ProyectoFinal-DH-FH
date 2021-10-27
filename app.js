//Se declaran variables generales del proyecto

let express = require("express");
let server = express();
let path = require("path");
let mainRouter = require("./routes/mainRouter");
let adminRouter = require("./routes/adminRouter");
let userRouter = require("./routes/userRouter");
let productRouter = require("./routes/productRouter");

let port = 3000;
let publicPath = path.resolve(__dirname, "./public");
//Se configura express
server.use(express.static(publicPath));
server.set("view engine", "ejs");

//Se configura el router
server.use("/", mainRouter);
server.use("/admin", adminRouter);
server.use("/User", userRouter);
server.use("/Producto", productRouter);

server.listen(port, () =>
  console.log("Esta levantado el servidor en el puerto " + port)
);

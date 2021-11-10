//Se declaran variables generales del proyecto

let express = require("express");
let server = express();
let path = require("path");
let mainRouter = require("./routes/mainRouter");
let userRouter = require("./routes/userRouter");
let productRouter = require("./routes/productRouter");

server.use(express.json());
let port = 3000;
let publicPath = path.resolve(__dirname, "./public");
//Se configura express
server.use(express.static(publicPath));
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: false }));

//Se configura el router
server.use("/", mainRouter);
server.use("/users", userRouter);
server.use("/products", productRouter);

server.listen(port, () => console.log("Server running on port: " + port));

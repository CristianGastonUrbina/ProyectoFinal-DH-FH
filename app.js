//Se declaran variables generales del proyecto

let express = require("express");
let server = express();
let path = require("path");
let mainRouter = require("./routes/mainRouter");
let userRouter = require("./routes/userRouter");
let productRouter = require("./routes/productRouter");
let apiRouter = require("./routes/apiRouter");
let methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
let recuerdame = require("./middlewares/recuerdame");

server.use(express.json());
let port = 3000;
let publicPath = path.resolve(__dirname, "./public");
//Se configura express
server.use(express.static(publicPath));
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));
server.use(session({ secret: "Sarasa" }));
server.use(cookieParser());
server.use(recuerdame);

//Se configura el router
server.use("/", mainRouter);
server.use("/api", apiRouter);
server.use("/users", userRouter);
server.use("/products", productRouter);

server.listen(port, () => console.log("Server running on port: " + port));

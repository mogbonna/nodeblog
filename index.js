require("dotenv").config();

const cloudinary = require("cloudinary");
const express = require("express");
const engine = require("express-edge");
const edge = import("edge.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const createUserController = require("./controllers/CreateUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");

// Middlewares
const storePost = require("./middleware/storePost");
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require("./middleware/redirectIfAuthenticated");

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connection successful!");
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();
app.use(flash());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  session({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
      collectionName: "sessions",
    }),
  })
);

app.use(fileUpload());
app.use(express.static("public"));
app.use(engine);
app.set("views", `${__dirname}/views`);
app.use("*", (req, res, next) => {
  app.locals.auth = req.session.userId;
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/auth/logout", auth, logoutController);
app.get("/posts/new", auth, createPostController);
app.post("/posts/store", auth, storePost, storePostController);
app.get("/auth/login", redirectIfAuthenticated, loginController);
app.post("/users/login", redirectIfAuthenticated, loginUserController);
app.get("/auth/register", redirectIfAuthenticated, createUserController);
app.post("/users/register", redirectIfAuthenticated, storeUserController);
app.use((req, res) => res.render("not-found"));
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("/contact", (req, res) => {
//   res.render("contact");
// });
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

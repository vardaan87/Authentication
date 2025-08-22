const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// index.js (or app.js)
app.use(cookieParser());

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.redirect("/login");

    const payload = jwt.verify(token, "supersecretkey"); // keep this in .env later
    // Load the full user so we have username/email on the page
    const user = await userModel.findOne({ email: payload.email });
    if (!user) return res.redirect("/login");

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.clearCookie("token");
    return res.redirect("/login");
  }
};

app.get("/signup", (req, res) => {
  res.render("signup");
});

//Sign Up
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const token = jwt.sign({ email }, "supersecretkey");
    res.cookie("token", token);

    let user = await userModel.create({
      username,
      email,
      password: hash,
    });
    res.redirect("/home");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});

app.get("/profile/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.render("menu", { user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading user profile");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.send("No User Found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.send("Password is incorrect");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "supersecretkey"
    );

    res.cookie("token", token);
    res.redirect("/home");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in user");
  }
});

app.get("/home", requireAuth, (req, res) => {
  res.render("home", { user: req.user }); // views/home.ejs
});

// (optional) Logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.listen(3000, () => console.log("app is listing to port 3000"));

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const { apiV1 } = require("./routes");
const { connectDb } = require("./db");
const { UserModel } = require("./models/user");
const adminRoutes = require('./routes/admin'); // Adjust the path as necessary
const issuanceRoutes = require("./routes/issuance");
const userRoutes = require("./routes/newUser"); // Import the new user routes

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/api/issuance", issuanceRoutes);

app.use(
  sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: true,
  })
);

app.use("/v1", apiV1);
app.use('/admin', adminRoutes);
app.use('/v1/user', userRoutes); // Use the new user routes

app.use((req, res) => {
  return res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Error:", err);
  return res.status(500).json({ error: err.message || "Unknown server error" });
});

connectDb()
  .then(() => {
    app.listen(8080, () => console.log("Server is listening on http://localhost:8080"));
  })
  .catch((err) => {
    console.error("Failed to connect to database", err);
    process.exit(1);
  });

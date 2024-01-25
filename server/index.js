import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

mongoose.connect("mongodb://localhost:27017")
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});


app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})
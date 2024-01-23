import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
const app = express();
app.use(express.json());
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
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import listingRoute from "./routes/listing.route.js"
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));


mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log(err);
});

const __dirname = path.resolve();
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use('/api/listing', listingRoute);

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})
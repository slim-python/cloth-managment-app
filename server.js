import { app } from "./app.js";
import dotenv from "dotenv";
import connectDatababse from "./config/database.js";
import { v2 as cloudinary } from "cloudinary";
import passport from "passport";
// import initializingPassport from "./utils/passport-setup.js";
import expressSession from "express-session";
// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

//dotenv config
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config/config.env" });
}

//connect to database
connectDatababse();

//passport config
// initializingPassport(passport);

//connect to cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running... http://localhost:${process.env.PORT}`);
});

//unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});

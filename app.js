import express from "express";
import errorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import expressSession from "express-session";
import cors from "cors";
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
//handle cors
app.use(
  cors({
    origin: `http://localhost:${process.env.PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Route Imports
import product from "./routes/ProductRoute.js";
import user from "./routes/UserRoute.js";

app.use("/api/v1", product);
app.use("/api/v1", user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Middleware to handle errors
app.use(errorMiddleware);

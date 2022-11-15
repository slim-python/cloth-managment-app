import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  logout,
} from "../controllers/userController.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

export default router;

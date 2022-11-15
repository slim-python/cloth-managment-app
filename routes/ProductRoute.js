import express from "express";
const router = express.Router();
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  shareProduct,
} from "../controllers/ProductControllers.js";

import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

router.route("/products").get(isAuthenticatedUser, getAllProducts);
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("user"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("user"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("user"), deleteProduct);

router.route("/product/:id").get(isAuthenticatedUser, getSingleProduct);
router.route("/share/product/:id").get(shareProduct);

export default router;

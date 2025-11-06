import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getAllProducts);

// Create Product

router.post("/", createProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product

router.delete("/:id", deleteProduct);

export default router;

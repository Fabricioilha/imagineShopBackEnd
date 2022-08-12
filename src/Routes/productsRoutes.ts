import { Router } from "express";
import ProductController from "../controllers/productController";
import { authMiddleware } from "../middlewares/authMiddleware";

const productRoutes = Router()

productRoutes.get("/products", ProductController.readAll)
productRoutes.get("/product/:id", ProductController.readById)
productRoutes.post("/product", authMiddleware, ProductController.add)

export default productRoutes
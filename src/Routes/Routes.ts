import { Router } from "express";
import ProductController from "../controllers/productController";
import UserController from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { uploadMiddleware } from "../middlewares/uploadImage";

const Routes = Router()


// Home
Routes.get("/",(req, res)=>{
    res.send("BACK END WORKS")
})

// Login
Routes.post("/login", UserController.login)

// Rotas de usuario
Routes.get("/user",authMiddleware, UserController.readAll)
Routes.get("/user/:id",authMiddleware, UserController.readById)
Routes.post("/user",authMiddleware, UserController.add)
Routes.put("/user/:id",authMiddleware, UserController.updateById)
Routes.delete("/user/:id",authMiddleware, UserController.deleteById)


// Rotas dos produtos
Routes.get("/products", ProductController.readAll)
Routes.get("/product/:id", ProductController.readById)
Routes.post("/product",authMiddleware, uploadMiddleware.single("image"), ProductController.add)

export default Routes
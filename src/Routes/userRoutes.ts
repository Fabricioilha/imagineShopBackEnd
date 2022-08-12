import { Router } from "express";
import UserController from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";

const userRoutes = Router()

userRoutes.get("/user",authMiddleware, UserController.readAll)
userRoutes.get("/user/:id",authMiddleware, UserController.readById)
userRoutes.post("/user",authMiddleware, UserController.add)
userRoutes.put("/user/:id",authMiddleware, UserController.updateById)
userRoutes.delete("/user/:id",authMiddleware, UserController.deleteById)

export default userRoutes
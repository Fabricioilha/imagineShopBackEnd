import { Router } from "express";
import UserController from "./controllers/userController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router()

routes.post("/login", UserController.login)
routes.use(authMiddleware)
routes.get("/user", UserController.readAll)
routes.get("/user/:id", UserController.readById)
routes.post("/user", UserController.add)
routes.put("/user/:id", UserController.updateById)
routes.delete("/user/:id", UserController.deleteById)

export default routes
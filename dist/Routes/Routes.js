"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const userController_1 = __importDefault(require("../controllers/userController"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const Routes = (0, express_1.Router)();
// Home
Routes.get("/", (req, res) => {
    res.send("BACK END WORKS");
});
// Login
Routes.post("/login", userController_1.default.login);
// Rotas de usuario
Routes.get("/user", authMiddleware_1.authMiddleware, userController_1.default.readAll);
Routes.get("/user/:id", authMiddleware_1.authMiddleware, userController_1.default.readById);
Routes.post("/user", authMiddleware_1.authMiddleware, userController_1.default.add);
Routes.put("/user/:id", authMiddleware_1.authMiddleware, userController_1.default.updateById);
Routes.delete("/user/:id", authMiddleware_1.authMiddleware, userController_1.default.deleteById);
// Rotas dos produtos
Routes.get("/products", productController_1.default.readAll);
Routes.get("/product/:id", productController_1.default.readById);
Routes.post("/product", authMiddleware_1.authMiddleware, productController_1.default.add);
exports.default = Routes;

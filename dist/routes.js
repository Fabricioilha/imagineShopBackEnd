"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./controllers/userController"));
const authMiddleware_1 = require("./middlewares/authMiddleware");
const routes = (0, express_1.Router)();
routes.post("/login", userController_1.default.login);
routes.use(authMiddleware_1.authMiddleware);
routes.get("/user", userController_1.default.readAll);
routes.get("/user/:id", userController_1.default.readById);
routes.post("/user", userController_1.default.add);
routes.put("/user/:id", userController_1.default.updateById);
routes.delete("/user/:id", userController_1.default.deleteById);
exports.default = routes;

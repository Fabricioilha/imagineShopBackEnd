"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../services/userService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const UserController = {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield userService_1.UserService.add(req.body);
                return res.json({ msg: "Cadastrado com sucesso" });
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService_1.UserService.readById(req.params.id);
                return res.json(user);
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield userService_1.UserService.readAll();
                return res.json(allUsers);
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    updateById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    id: req.params.id,
                    body: req.body
                };
                const updated = yield userService_1.UserService.update(data);
                return res.json(updated);
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield userService_1.UserService.delete(req.params.id);
                return res.json(deleted);
            }
            catch (error) {
                res.json(error);
            }
        });
    },
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const islogged = yield userService_1.UserService.login(email, password);
                if (islogged) {
                    const secretKey = process.env.SECRET_KEY;
                    if (secretKey) {
                        const token = jsonwebtoken_1.default.sign({ user: islogged }, secretKey, { expiresIn: "1d" });
                        return res.json({ token });
                    }
                    else {
                        return res.json({ msg: "Erro no token" });
                    }
                }
                else {
                    return res.json({ msg: "ERROR" });
                }
            }
            catch (error) {
                res.json(error);
            }
        });
    }
};
exports.default = UserController;

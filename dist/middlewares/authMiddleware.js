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
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userService_1 = require("../services/userService");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authorization = req.headers.authorization;
    const token = authorization ? authorization.split(" ")[1] : undefined;
    if (token) {
        const secretKey = process.env.SECRET_KEY;
        if (secretKey) {
            jsonwebtoken_1.default.verify(token, secretKey, { ignoreExpiration: false }, (err, decodedToken) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    return res.status(401).json({ msg: "Não autorizado" });
                }
                else {
                    if (decodedToken) {
                        const payload = decodedToken;
                        const user = yield userService_1.UserService.findByEmail(payload.user.email);
                        if (user) {
                            next();
                        }
                    }
                }
            }));
        }
    }
});
exports.authMiddleware = authMiddleware;

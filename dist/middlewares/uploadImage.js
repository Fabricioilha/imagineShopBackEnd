"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const crypto_1 = __importDefault(require("crypto"));
const path_1 = require("path");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const newFileName = crypto_1.default.randomBytes(32).toString("hex");
        const fileExtension = (0, path_1.extname)(file.originalname);
        cb(null, `${newFileName}${fileExtension}`);
    }
});
exports.uploadMiddleware = (0, multer_1.default)({ storage });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const produtcSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    summary: String,
    stock: Number,
    filename: String
}, {
    timestamps: true,
    collection: "produtcs"
});
exports.ProductModel = (0, mongoose_1.model)("product", produtcSchema, "produtcs");

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const productSchema_1 = require("../database/schemas/productSchema");
exports.ProductService = {
    add: (product) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield productSchema_1.ProductModel.create(product);
        }
        catch (error) {
            return error;
        }
    }),
    readById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield productSchema_1.ProductModel.findById(id);
            return user;
        }
        catch (error) {
            return error;
        }
    }),
    readAll: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allProducts = yield productSchema_1.ProductModel.find();
            return allProducts;
        }
        catch (error) {
            return error;
        }
    })
};

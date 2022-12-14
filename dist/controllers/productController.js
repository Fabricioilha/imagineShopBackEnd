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
require("dotenv/config");
const productService_1 = require("../services/productService");
const ProductController = {
    add(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
                if (filename) {
                    const { name, description, price, summary, stock } = req.body;
                    yield productService_1.ProductService.add({ name, description, price, summary, stock, filename });
                    return res.json({ msg: "Cadastrado com sucesso" });
                }
                else {
                    return res.json({ err: "Upload não concluiido" });
                }
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productService_1.ProductService.readById(req.params.id);
                return res.json(product);
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProducts = yield productService_1.ProductService.readAll();
                return res.json(allProducts);
            }
            catch (error) {
                return res.json(error);
            }
        });
    },
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productService_1.ProductService.deleteOne(req.params.id);
                return res.json({ msg: "Exluido com sucesso" });
            }
            catch (error) {
                res.json(error);
            }
        });
    },
    sellProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { products } = req.body;
            for (const product of products) {
                yield productService_1.ProductService.sellProduct(product);
            }
            return res.status(200).json({ message: 'success' });
        });
    }
};
exports.default = ProductController;

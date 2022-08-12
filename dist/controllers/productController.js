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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productService_1.ProductService.add(req.body);
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
    // async updateById (req: Request, res: Response){
    //     try {
    //         const data:updateUserType = {
    //             id: req.params.id,
    //             body: req.body
    //         }
    //         const updated = await UserService.update(data)
    //         return res.json(updated)
    //     } catch (error) {
    //         return res.json(error)
    //     }
    // },
    // async deleteById (req: Request, res: Response){
    //     try {
    //         const deleted = await UserService.delete(req.params.id)
    //         return res.json(deleted)
    //     } catch (error) {
    //         res.json(error)
    //     }
    // }
};
exports.default = ProductController;

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
exports.UserService = void 0;
const userSchema_1 = require("../database/schemas/userSchema");
exports.UserService = {
    add: (user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield userSchema_1.UserModel.create(user);
        }
        catch (error) {
            return error;
        }
    }),
    readById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userSchema_1.UserModel.findById(id);
            return user;
        }
        catch (error) {
            return error;
        }
    }),
    readAll: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allUsers = yield userSchema_1.UserModel.find();
            return allUsers;
        }
        catch (error) {
            return error;
        }
    }),
    update: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updated = yield userSchema_1.UserModel.updateOne({ _id: data.id }, data.body);
            return updated;
        }
        catch (error) {
            return error;
        }
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deleted = yield userSchema_1.UserModel.deleteOne({ _id: id });
            return deleted;
        }
        catch (error) {
            return error;
        }
    }),
    findByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userSchema_1.UserModel.findOne({ email });
    }),
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        if (email && password) {
            const user = yield exports.UserService.findByEmail(email);
            if (user) {
                const auth = user.password === password;
                if (auth) {
                    return user;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    })
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signinToken = exports.comparePassword = exports.hashedPassword = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const hashedPassword = (password) => {
    const hashPassword = (0, bcrypt_1.hashSync)(password, 12);
    return hashPassword;
};
exports.hashedPassword = hashedPassword;
const comparePassword = (password, hashedPassword) => {
    const comparePassword = (0, bcrypt_1.compareSync)(password, hashedPassword);
    return comparePassword;
};
exports.comparePassword = comparePassword;
const signinToken = (user) => {
    const accessToken = (0, jsonwebtoken_1.sign)(user, config_1.JWT_SECRET, { expiresIn: "1d" });
    return accessToken;
};
exports.signinToken = signinToken;
const verifyToken = (token) => {
    return (0, jsonwebtoken_1.verify)(token, config_1.JWT_SECRET);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=index.js.map
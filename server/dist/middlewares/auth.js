"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const index_1 = require("../helpers/index");
const errors_1 = require("../helpers/errors");
const isAuth = (req, _res, next) => {
    try {
        const authHeader = req.get("Authorization");
        console.log("authHeader First -->", authHeader);
        if (!authHeader)
            return next((0, errors_1.CreateError)(401, "authHeader Not Found or ERROR"));
        const accessToken = authHeader.split(" ")[1];
        console.log("accessToken -->", accessToken);
        if (!accessToken)
            next((0, errors_1.CreateError)(401, "accessToken Not found or ERROR"));
        const employee = (0, index_1.verifyToken)(accessToken);
        if (!employee)
            next((0, errors_1.CreateError)(401, "employee on verifyToken Not found or ERROR"));
        req.employee = employee;
        next();
        console.log("employee Data ->", employee);
    }
    catch (error) {
        next((0, errors_1.CreateError)(500, error));
    }
};
exports.isAuth = isAuth;
//# sourceMappingURL=auth.js.map
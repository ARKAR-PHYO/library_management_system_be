"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const employeeController_1 = require("../controllers/employeeController");
const auth_1 = require("../middlewares/auth");
exports.employeeRouter = (0, express_1.Router)();
exports.employeeRouter.post("/signin", [(0, express_validator_1.body)("email").notEmpty(), (0, express_validator_1.body)("password").notEmpty()], employeeController_1.SigninUser);
exports.employeeRouter.get("/authorizedEmployee", auth_1.isAuth, employeeController_1.authorizedEmployee);
//# sourceMappingURL=employeeRouter.js.map
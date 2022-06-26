"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authorController_1 = require("../controllers/authorController");
const auth_1 = require("../middlewares/auth");
exports.authorRouter = (0, express_1.Router)();
exports.authorRouter.post("/createAuthor", [
    (0, express_validator_1.body)("name").notEmpty(),
    (0, express_validator_1.body)("biography").notEmpty(),
    (0, express_validator_1.body)("employee_id").notEmpty(),
], auth_1.isAuth, authorController_1.createAuthor);
exports.authorRouter.get("/authors", auth_1.isAuth, authorController_1.authors);
//# sourceMappingURL=authorRouter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authorController_1 = require("../controllers/authorController");
exports.authorRouter = (0, express_1.Router)();
exports.authorRouter.post("/createAuthor", [(0, express_validator_1.body)("name").notEmpty(), (0, express_validator_1.body)("biography").notEmpty()], authorController_1.createAuthor);
//# sourceMappingURL=authorRouter.js.map
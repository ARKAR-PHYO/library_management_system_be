"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middlewares/auth");
const bookController_1 = require("../controllers/bookController");
exports.bookRouter = (0, express_1.Router)();
exports.bookRouter.post("/createBook", [
    (0, express_validator_1.body)("title").notEmpty(),
    (0, express_validator_1.body)("ISBN").notEmpty(),
    (0, express_validator_1.body)("summary").notEmpty(),
    (0, express_validator_1.body)("publisher").notEmpty(),
    (0, express_validator_1.body)("sources"),
    (0, express_validator_1.body)("price").notEmpty(),
    (0, express_validator_1.body)("no_of_copies").notEmpty(),
    (0, express_validator_1.body)("employee_id").notEmpty(),
    (0, express_validator_1.body)("author_id").notEmpty(),
], auth_1.isAuth, bookController_1.createBook);
exports.bookRouter.get("/books", auth_1.isAuth, bookController_1.books);
//# sourceMappingURL=bookRouter.js.map
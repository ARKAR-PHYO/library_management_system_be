"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const authorRouter_1 = require("./router/authorRouter");
const employeeRouter_1 = require("./router/employeeRouter");
const bookRouter_1 = require("./router/bookRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.listen(config_1.SERVER_PORT, () => {
    console.log(`Server is running at http://${config_1.SERVER_DOMAIN}:${config_1.SERVER_PORT}`);
    // ROUTES
    app.use("/api/employees", employeeRouter_1.employeeRouter);
    app.use("/api/authors", authorRouter_1.authorRouter);
    app.use("/api/books", bookRouter_1.bookRouter);
});
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMIN_PASSWORD = exports.ADMIN_EMAIL = exports.CLIENT_PORT = exports.JWT_SECRET = exports.SERVER_DOMAIN = exports.SERVER_PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.SERVER_PORT = process.env.SERVER_PORT || 8800;
exports.SERVER_DOMAIN = process.env.SERVER_DOMAIN || "localhost";
exports.JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";
exports.CLIENT_PORT = process.env.CLIENT_PORT || 4000;
exports.ADMIN_EMAIL = process.env.ADMIN_EMAIL || "super_admin@admin.com";
exports.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password";
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateError = void 0;
const CreateError = (status, message, data) => {
    const error = new Error();
    error.statusCode = status;
    error.message = message;
    error.data = data;
    return error;
};
exports.CreateError = CreateError;
//# sourceMappingURL=errors.js.map
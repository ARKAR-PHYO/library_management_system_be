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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthor = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const createAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield prisma_1.default.author.create({
            data: {
                name: req.body.name,
                biography: req.body.biography,
            },
        });
        if (!author) {
            res.status(422).json({
                statusCode: 422,
                message: "AUTHOR CREATION ERROR WITH STATUSCODE 422",
            });
        }
        res.status(200).json({
            statusCode: 200,
            message: "AUTHOR CREATION SUCCESS",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createAuthor = createAuthor;
//# sourceMappingURL=authorController.js.map
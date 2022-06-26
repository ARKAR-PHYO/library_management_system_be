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
exports.books = exports.createBook = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const errors_1 = require("../helpers/errors");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma_1.default.books.create({
            data: {
                title: req.body.title,
                ISBN: req.body.ISBN,
                summary: req.body.summary,
                // image: req.body.image,
                publisher: req.body.publisher,
                sources: req.body.sources,
                price: req.body.price,
                no_of_copies: req.body.no_of_copies,
                employee_id: req.body.employee_id,
                author_id: req.body.author_id,
            },
        });
        if (!book) {
            res.status(422).json({
                statusCode: 422,
                message: "BOOK CREATION ERROR WITH STATUSCODE 422",
            });
            next((0, errors_1.CreateError)(422, "BOOK CREATION ERROR WITH STATUSCODE 422"));
        }
        res.status(201).json({
            statusCode: 201,
            message: "BOOK CREATION SUCCESS",
        });
    }
    catch (error) {
        next(error);
        // res.status(500).json({
        //   statusCode: 500,
        //   message: "BOOK CREATION ERROR WITH STATUSCODE 500",
        // });
        // next(CreateError(500, "BOOK CREATION ERROR WITH STATUSCODE 500"));
    }
});
exports.createBook = createBook;
const books = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield prisma_1.default.books.findMany({
            select: {
                title: true,
                ISBN: true,
                summary: true,
                image: true,
                publisher: true,
                sources: true,
                price: true,
                no_of_copies: true,
                employee: true,
                author: true,
            },
        });
        if (!books) {
            res.status(404).json({
                statusCode: 404,
                message: "There is no records.",
            });
            next((0, errors_1.CreateError)(404, "BOOK RECORD NOT FOUND WITH STATUSCODE 404"));
        }
        res.status(200).json({
            statusCode: 200,
            message: "Data Found",
            data: books,
        });
    }
    catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "BOOK Fetching ERROR WITH STATUSCODE 500",
        });
        next((0, errors_1.CreateError)(500, `BOOK Fetching ERROR WITH STATUSCODE 500 -> ${error}`));
    }
});
exports.books = books;
//# sourceMappingURL=bookController.js.map
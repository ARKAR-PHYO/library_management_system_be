import { Router } from "express";
import { body } from "express-validator";
import { isAuth } from "../middlewares/auth";
import { books, createBook } from "../controllers/bookController";

export const bookRouter = Router();

bookRouter.post(
  "/createBook",
  [
    body("title").notEmpty(),
    body("ISBN").notEmpty(),
    body("summary").notEmpty(),
    body("publisher").notEmpty(),
    body("sources"),
    body("price").notEmpty(),
    body("no_of_copies").notEmpty(),
    body("employee_id").notEmpty(),
    body("author_id").notEmpty(),
  ],
  isAuth,
  createBook
);

bookRouter.get("/books", isAuth, books);

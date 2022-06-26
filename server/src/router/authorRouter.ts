import { Router } from "express";
import { body } from "express-validator";
import { authors, createAuthor } from "../controllers/authorController";
import { isAuth } from "../middlewares/auth";

export const authorRouter = Router();

authorRouter.post(
  "/createAuthor",
  [
    body("name").notEmpty(),
    body("biography").notEmpty(),
    body("employee_id").notEmpty(),
  ],
  isAuth,
  createAuthor
);

authorRouter.get("/authors", isAuth, authors);

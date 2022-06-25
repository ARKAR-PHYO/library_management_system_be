import { Router } from "express";
import { body } from "express-validator";
import {
  SigninUser,
  authorizedEmployee,
} from "../controllers/employeeController";
import { isAuth } from "../middlewares/auth";

export const employeeRouter = Router();

employeeRouter.post(
  "/signin",
  [body("email").notEmpty(), body("password").notEmpty()],
  SigninUser
);

employeeRouter.get("/authorizedEmployee", isAuth, authorizedEmployee);

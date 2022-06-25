import { NextFunction } from "express";
import { verifyToken } from "../helpers/index";
import { CreateError } from "../helpers/errors";

export const isAuth = (req: any, _res: any, next: NextFunction) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader)
      return next(CreateError(401, "authHeader Not Found or ERROR"));

    const accessToken = authHeader.split(" ")[1];

    if (!accessToken) next(CreateError(401, "accessToken Not found or ERROR"));

    const employee = verifyToken(accessToken);
    if (!employee)
      next(CreateError(401, "employee on verifyToken Not found or ERROR"));
    req.employee = employee;
    next();
  } catch (error: any) {
    next(CreateError(500, error));
  }
};

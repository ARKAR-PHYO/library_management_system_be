import { compareSync, hashSync } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { Employees } from "../types";

export const hashedPassword = (password: string): string => {
  const hashPassword = hashSync(password, 12);
  return hashPassword;
};

export const comparedPassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const comparePassword = compareSync(password, hashedPassword);
  return comparePassword;
};

export const signinToken = (employees: Employees) => {
  const accessToken = sign(employees, JWT_SECRET, { expiresIn: "1d" });
  return accessToken;
};

export const verifyToken = (token: string) => {
  return verify(token, JWT_SECRET);
};

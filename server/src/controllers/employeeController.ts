import { NextFunction, Request, Response } from "express";
import { comparedPassword, signinToken } from "../helpers";
import { CreateError } from "../helpers/errors";
import prisma from "../lib/prisma";

export const SigninUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await prisma.employees.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (!employee) return next(CreateError(404, "EMPLOYEE NOT FOUND !!"));

    const isPasswordCorrect = comparedPassword(
      req.body.password,
      employee.password
    );
    if (!isPasswordCorrect)
      return next(CreateError(404, "WRONG USER NAME OR PASSWORD !!!"));

    const accessToken: string = signinToken({
      email: employee.email,
      id: employee.id,
      password: employee.password,
      updatedAt: employee.updatedAt.toDateString(),
      createdAt: employee.createdAt.toDateString(),
      name: employee.name,
      bio: employee.bio,
      phone_number: employee.phone_number,
      address: employee.address,
      nrc: employee.nrc,
      dob: employee.dob,
      profile_picture: employee.profile_picture,
      barcode: employee.barcode,
    });
    if (accessToken) {
      const { password, ...otherDetails } = employee;
      res
        .cookie(
          "accessToken",
          { ...otherDetails, accessToken },
          {
            httpOnly: true,
          }
        )
        .status(200)
        .json({
          statusCode: 200,
          message: `EMPLOYEE SUCCESS SIGNIN.`,
          accessToken,
        });
      console.log("Client connected");
    }
  } catch (error: any) {
    next(CreateError(500, error));
  }
};

export const authorizedEmployee = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = req.employee;
    console.log("emploee on Controller ->", employee);

    res.status(200).json({
      statusCode: 200,
      message: "YOU ARE AUTHORIZED.",
      employee: employee,
    });
  } catch (error: any) {
    next(CreateError(500, error));
  }
};

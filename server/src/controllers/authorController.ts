import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";
import { CreateError } from "../helpers/errors";

export const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await prisma.author.create({
      data: {
        name: req.body.name,
        biography: req.body.biography,
        employee_id: req.body.employee_id,
      },
    });
    if (!author) {
      res.status(422).json({
        statusCode: 422,
        message: "AUTHOR CREATION ERROR WITH STATUSCODE 422",
      });
    }
    res.status(201).json({
      statusCode: 201,
      message: "AUTHOR CREATION SUCCESS",
    });
  } catch (error) {
    next(error);
  }
};

export const authors = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await prisma.author.findMany({
      select: {
        id: true,
        name: true,
        biography: true,
        employee_id: true,
      },
    });
    if (!authors) {
      res.status(404).json({
        statusCode: 404,
        message: "There is no records.",
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: "Data Found",
      data: authors,
    });
  } catch (error: any) {
    next(CreateError(500, error));
  }
};

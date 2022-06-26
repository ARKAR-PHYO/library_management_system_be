import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";
import { CreateError } from "../helpers/errors";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await prisma.books.create({
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
      next(CreateError(422, "BOOK CREATION ERROR WITH STATUSCODE 422"));
    }
    res.status(201).json({
      statusCode: 201,
      message: "BOOK CREATION SUCCESS",
    });
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   statusCode: 500,
    //   message: "BOOK CREATION ERROR WITH STATUSCODE 500",
    // });
    // next(CreateError(500, "BOOK CREATION ERROR WITH STATUSCODE 500"));
  }
};

export const books = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await prisma.books.findMany({
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
      next(CreateError(404, "BOOK RECORD NOT FOUND WITH STATUSCODE 404"));
    }
    res.status(200).json({
      statusCode: 200,
      message: "Data Found",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "BOOK Fetching ERROR WITH STATUSCODE 500",
    });
    next(
      CreateError(500, `BOOK Fetching ERROR WITH STATUSCODE 500 -> ${error}`)
    );
  }
};

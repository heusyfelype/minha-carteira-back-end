import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import { MongoInvalidArgumentError } from "mongodb";

const typeErrors = {
  conflict: 409,
  unauthorized: 401,
  "not found": 404,
};

export function handleError(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type) {
    return typeErrorHandle(error.type, error.message, error, res);
  }

  if (typeof error === typeof MongoInvalidArgumentError)
    console.log("Erro no banco de dados: ", error);
  if (typeof error === "string" && error.includes("jwt expired"))
    res.status(400).send(false);
  else console.log("Erro não tratado: ", error);

  return res.sendStatus(500);
}

function typeErrorHandle(
  type: string,
  message: string,
  error,
  res: Response
): Response {
  return typeErrors[type]
    ? res.status(typeErrors[type]).send(message)
    : res.status(500).send(error);
}

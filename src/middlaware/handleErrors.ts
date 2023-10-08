import { NextFunction, Request, Response } from "express";

export function handleError(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Erro: ", error);

  if (error.type) {
    return typeErrorHandle(error.type, error.message, error, res);
  }

  return res.sendStatus(500);
}

function typeErrorHandle(type: string, message: string, error, res: Response): Response {
  if (type === "conflict") {
    return res.status(409).send(message);
  }
  if (type === "unauthorized") {
    return res.status(401).send(message);
  }
  if (type === "not found") {
    return res.status(404).send(message);
  }
  return res.status(500).send(error);
}

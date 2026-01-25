import { Request, Response, NextFunction } from "express";
import { httpResponse } from "../utils/http.response";
import { logger } from "../logs/logger";
import { NotFoundError, UnhauthorizedError } from "../utils/error.custom";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error({
    name: error.name,
    message: error.message,
    url: req.url
  });

  if (error instanceof NotFoundError)
    return httpResponse.NotFound(res, error.message);

  if (error instanceof UnhauthorizedError)
    return httpResponse.Unauthorized(res, error.message);

  return httpResponse.ServerError(res, error, req.url);
};

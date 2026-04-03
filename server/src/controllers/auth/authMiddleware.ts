import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).json({ message: "Not valid token" });
    return;
  }
  const accessToken = authorization?.split(" ")[1];

  if (!secretKey) {
    res.status(401).json({ message: "Not valid token" });
    return;
  }

  const decoded = jwt.verify(accessToken, secretKey) as JwtPayload;

  req.user = decoded.data;
  next();
};

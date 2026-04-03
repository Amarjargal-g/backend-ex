import { NextFunction, Request, Response } from "express";

export const authAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  if (user?.role === "ADMIN") {
    next();
  } else {
    res.status(401).json({ message: "Admin role required" });
    return;
  }
};

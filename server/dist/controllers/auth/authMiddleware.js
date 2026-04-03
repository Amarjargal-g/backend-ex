"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
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
    const decoded = jsonwebtoken_1.default.verify(accessToken, secretKey);
    req.user = decoded.data;
    next();
};
exports.authMiddleware = authMiddleware;

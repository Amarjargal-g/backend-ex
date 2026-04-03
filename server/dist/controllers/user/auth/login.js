"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../../../lib/prisma");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Login = async (req, res) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    const { email, password } = req.body;
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user)
        return res.status(404).json({ message: "User not found" });
    if (!user.password)
        return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });
    const accessToken = jsonwebtoken_1.default.sign({
        data: { userId: user.id, email: user.email, role: user.role },
    }, JWT_SECRET, { expiresIn: "24h" });
    return res.status(200).json({ accessToken });
};
exports.Login = Login;

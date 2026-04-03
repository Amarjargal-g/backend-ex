"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const addUser = async (req, res) => {
    const { email, age, password, name } = req.body;
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    try {
        const user = await prisma_1.prisma.user.create({
            data: {
                email,
                age,
                password: hashedPassword,
                name,
            },
        });
        res.status(200).json({
            message: "success",
            data: user,
        });
    }
    catch (err) {
        res.status(500).json({
            message: `Something happened ${err}`,
        });
    }
};
exports.addUser = addUser;

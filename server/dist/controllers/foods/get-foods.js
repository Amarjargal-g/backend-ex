"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoods = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoods = async (_req, res) => {
    try {
        const foods = await prisma_1.prisma.food.findMany({});
        if (!foods || foods.length === 0) {
            res.status(404).json({ message: "Not found", foods: [] });
        }
        res.status(200).json({ message: "Success", foods: foods });
    }
    catch (err) {
        if (err instanceof Error) {
            throw new Error(`Something went wrong: ${err}`);
        }
    }
};
exports.getFoods = getFoods;

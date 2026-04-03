"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodById = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoodById = async (req, res) => {
    const { id } = req.params;
    const foods = await prisma_1.prisma.foodCategory.findFirst({
        where: { id: Number(id) },
    });
    res.json(foods);
};
exports.getFoodById = getFoodById;

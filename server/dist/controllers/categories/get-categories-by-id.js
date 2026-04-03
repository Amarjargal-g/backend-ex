"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesById = void 0;
const prisma_1 = require("../../lib/prisma");
const getCategoriesById = async (req, res) => {
    const { id } = req.params;
    const categories = await prisma_1.prisma.foodCategory.findFirst({
        where: { id: Number(id) },
    });
    res.send({ categories });
};
exports.getCategoriesById = getCategoriesById;

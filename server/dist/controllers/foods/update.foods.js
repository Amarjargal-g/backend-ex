"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFoods = void 0;
const prisma_1 = require("../../lib/prisma");
const updateFoods = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, foodCategoryId } = req.body;
        const updateCategory = await prisma_1.prisma.food.update({
            where: { id: Number(id) },
            data: { name, price, foodCategoryId },
        });
        res.status(200).json({ updateCategory });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.updateFoods = updateFoods;

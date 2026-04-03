"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategories = void 0;
const prisma_1 = require("../../lib/prisma");
const updateCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateCategory = await prisma_1.prisma.foodCategory.update({
            where: { id: Number(id) },
            data: { name: name },
        });
        res.status(200).json({ updateCategory });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.updateCategories = updateCategories;

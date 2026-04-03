"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategories = void 0;
const prisma_1 = require("../../lib/prisma");
const addCategories = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await prisma_1.prisma.foodCategory.create({
            data: { name },
        });
        res.status(200).json({ category });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.addCategories = addCategories;

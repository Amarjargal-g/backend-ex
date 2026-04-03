"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFoods = void 0;
const prisma_1 = require("../../lib/prisma");
const addFoods = async (req, res) => {
    const { name, price, foodCategoryId, ingredients } = req.body;
    console.log(req.body);
    try {
        const food = await prisma_1.prisma.food.create({
            data: {
                name,
                price,
                foodCategoryId,
                ingredients,
            },
        });
        res.status(200).json({ food });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.addFoods = addFoods;

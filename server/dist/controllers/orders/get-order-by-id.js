"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrderById = async (req, res) => {
    const { id } = req.params;
    const orders = await prisma_1.prisma.food.findFirst({
        where: {
            id: Number(id),
        },
    });
    res.json({ orders });
};
exports.getOrderById = getOrderById;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrders = async (req, res) => {
    const orders = await prisma_1.prisma.foodOrder.findMany({
        include: {
            foodOrderItems: {
                include: {
                    food: true,
                },
            },
        },
    });
    res.json({ orders });
};
exports.getOrders = getOrders;

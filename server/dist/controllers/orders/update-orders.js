"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const updateOrders = async (_req, res) => {
    const updatedOrder = await prisma_1.prisma.foodOrder.update({
        where: { id: 2 },
        data: {
            status: "DELIVERED",
        },
    });
    res.json({ updatedOrder });
};
exports.updateOrders = updateOrders;

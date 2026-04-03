"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteOrders = async (req, res) => {
    const { id } = req.params;
    const deleteOrder = await prisma_1.prisma.foodOrder.delete({
        where: { id: Number(id) },
    });
    res.json({ deleteOrder });
};
exports.deleteOrders = deleteOrders;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFoods = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteFoods = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma_1.prisma.food.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "deleted successfully" });
    }
    catch (error) {
        res.status(404).json({ error: "User not found" });
    }
};
exports.deleteFoods = deleteFoods;

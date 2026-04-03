"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma_1.prisma.user.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "deleted successfully" });
    }
    catch (error) {
        res.status(404).json({ error: "User not found" });
    }
};
exports.deleteUser = deleteUser;

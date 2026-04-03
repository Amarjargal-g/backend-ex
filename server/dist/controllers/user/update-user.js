"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const prisma_1 = require("../../lib/prisma");
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, age, name } = req.body;
        const user = await prisma_1.prisma.user.update({
            where: { id: Number(id) },
            data: {
                email,
                password,
                age,
                name,
            },
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
};
exports.updateUser = updateUser;

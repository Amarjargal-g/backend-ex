"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const prisma_1 = require("../../lib/prisma");
const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await prisma_1.prisma.user.findFirst({
        where: {
            id: Number(id),
        },
    });
    res.json({ user });
};
exports.getUser = getUser;

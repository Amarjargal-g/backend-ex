"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrders = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../lib/prisma");
const addOrders = async (req, res) => {
    const userId = req.user?.userId;
    const { orderItems } = req.body;
    const totalPrice = await calcTotalPrice(orderItems);
    try {
        const orders = await prisma_1.prisma.foodOrder.create({
            data: {
                userId: Number(userId),
                status: client_1.Status.PENDING,
                totalPrice: totalPrice,
                foodOrderItems: {
                    create: orderItems,
                },
            },
        });
        res.json({ orders });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
};
exports.addOrders = addOrders;
const calcTotalPrice = async (orderItems) => {
    const foodIds = orderItems.map((orderItem) => orderItem.foodId);
    const foods = await findFoodsByIds(foodIds);
    const foodWithQuantity = foods.map((food) => {
        const foundedOrderItem = orderItems.find((orderItem) => orderItem.foodId === food.id);
        return { ...food, quantity: foundedOrderItem?.quantity };
    });
    const totalPrice = foodWithQuantity.reduce((acc, curr) => {
        return acc + Number(curr.price) * Number(curr.quantity);
    }, 0);
    return totalPrice.toString();
};
const findFoodsByIds = async (foodIds) => {
    const foods = await prisma_1.prisma.food.findMany({
        where: {
            id: {
                in: foodIds,
            },
        },
    });
    return foods;
};

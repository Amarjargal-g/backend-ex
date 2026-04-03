import { Status } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

type OrderItems = {
  foodId: number;
  quantity: number;
};
type BodyType = {
  orderItems: OrderItems[];
};

export const addOrders = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const { orderItems }: BodyType = req.body;
  const totalPrice = await calcTotalPrice(orderItems);

  try {
    const orders = await prisma.foodOrder.create({
      data: {
        userId: Number(userId),
        status: Status.PENDING,
        totalPrice: totalPrice,
        foodOrderItems: {
          create: orderItems,
        },
      },
    });
    res.json({ orders });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const calcTotalPrice = async (orderItems: OrderItems[]) => {
  const foodIds = orderItems.map((orderItem) => orderItem.foodId);

  const foods = await findFoodsByIds(foodIds);

  const foodWithQuantity = foods.map((food) => {
    const foundedOrderItem = orderItems.find(
      (orderItem) => orderItem.foodId === food.id,
    );

    return { ...food, quantity: foundedOrderItem?.quantity };
  });

  const totalPrice = foodWithQuantity.reduce((acc, curr) => {
    return acc + Number(curr.price) * Number(curr.quantity);
  }, 0);

  return totalPrice.toString();
};

const findFoodsByIds = async (foodIds: number[]) => {
  const foods = await prisma.food.findMany({
    where: {
      id: {
        in: foodIds,
      },
    },
  });
  return foods;
};

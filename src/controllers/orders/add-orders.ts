import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";
type FoodOrder = {
  foodOrderId: any;
  foodId: number;
  quantity: number;
};
type BodyType = {
  foods: FoodOrder[];
};

export const addOrders = async (req: Request, res: Response) => {
  const { foods }: BodyType = req.body;
  try {
    // const f = foods.map((food)=>food.foodId)
    // const foo = await prisma.food.findMany({
    //     where:{
    //         id:{
    //             in:f,
    //         }
    //     }
    // })
    // console.log({foo});
    // res.send("ok");
    // return

    const orders = await prisma.foodOrder.create({
      data: {
        status: "pending",
        totalPrice: "100",
      },
    });

    const foodsWithOrderId = foods.map((food) => ({
      ...food,
      foodOrderId: orders.id,
    }));

    const orderItem = await prisma.foodOrderItem.createMany({
      data: foodsWithOrderId,
    });
    res.json({ orders, orderItem });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

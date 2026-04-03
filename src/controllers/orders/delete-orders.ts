import { prisma } from "../../lib/prisma";

type Data = {
  status: String;
  totalPrice: String;
};

export const deleteOrders = async ({ status, totalPrice }: Data) => {
  try {
    const result = await prisma.foodOrder.deleteMany({
      where: {
        status: "string",
        totalPrice: "string",
      },
    });

    return result;
  } catch (error) {
    throw Error("idk");
  }
};

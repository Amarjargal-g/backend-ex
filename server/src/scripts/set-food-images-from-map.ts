import { prisma } from "../lib/prisma";

/**
 * Replace these values with your real Cloudinary image URLs (or public IDs).
 * Keys must match the food name in your database exactly.
 */
const FOOD_IMAGE_MAP: Record<string, string> = {
  "Finger Food": "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/sample.jpg",
  "Cranberry Brie Bites":
    "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/docs/shoes.jpg",
  "Sunshine Stackers":
    "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/docs/model.jpg",
};

const run = async () => {
  const foods = await prisma.food.findMany({
    select: { id: true, name: true, image: true },
    orderBy: { id: "asc" },
  });

  let updatedCount = 0;

  for (const food of foods) {
    const nextImage = FOOD_IMAGE_MAP[food.name];
    if (!nextImage) continue;

    await prisma.food.update({
      where: { id: food.id },
      data: { image: nextImage },
    });

    updatedCount++;
  }

  console.log(`Updated ${updatedCount} foods from map.`);
  console.log(
    `Skipped ${foods.length - updatedCount} foods (no matching key in FOOD_IMAGE_MAP).`,
  );
};

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

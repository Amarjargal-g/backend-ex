import { prisma } from "../lib/prisma";

const DEMO_IMAGES = [
  "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/sample.jpg",
  "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/docs/shoes.jpg",
  "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/docs/model.jpg",
  "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/docs/glasses.jpg",
];

const run = async () => {
  const foods = await prisma.food.findMany({
    select: {
      id: true,
      image: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  for (const [index, food] of foods.entries()) {
    const nextImage =
      food.image && food.image !== "default_image.jpg"
        ? food.image
        : DEMO_IMAGES[index % DEMO_IMAGES.length];

    await prisma.food.update({
      where: { id: food.id },
      data: { image: nextImage },
    });
  }

  console.log(`Updated ${foods.length} food images.`);
};

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

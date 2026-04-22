const DEFAULT_FOOD_IMAGE = "/default_image.jpg"

export const getCloudinaryImageUrl = (image?: string) => {
  if (!image) return DEFAULT_FOOD_IMAGE

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!cloudName) {
    return image.startsWith("/") ? image : DEFAULT_FOOD_IMAGE
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${image}`
}

import { cookies } from "next/headers";

export const GET = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://localhost:8080/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const categories = await response.json();

  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

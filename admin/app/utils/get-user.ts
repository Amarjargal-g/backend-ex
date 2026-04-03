import { cookies } from "next/headers";

type User = {
  email: string;
  phoneNumber: string | null;
};

export const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(`http://localhost:8080/users/auth/me`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const user = (await response.json()) as User;
  return user;
};

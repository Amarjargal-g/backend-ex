import { cookies, headers } from "next/headers";

type Credentials = {
  email: string;
  password: string;
};

type SignInResponse = {
  message: string;
  accessToken: string;
};

export const POST = async (req: Request) => {
  const credentials = (await req.json()) as Credentials;
  const cookieStore = await cookies();
  const response = await fetch(`http://localhost:8080/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = (await response.json()) as SignInResponse;

  if (!response.ok || !data.accessToken) {
    return new Response(
      JSON.stringify({ message: data.message ?? "Invalid credentials" }),
      {
        status: response.status || 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  cookieStore.set("token", data.accessToken, { path: "/" });

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

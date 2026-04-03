type Credentials = {
  email: string;
  password: string;
};

type SignUpResponse = {
  accessToken: string;
};

export const signUp = async (credentials: Credentials) => {
  const response = await fetch(`http://localhost:8080/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = (await response.json()) as SignUpResponse;
  return data;
};

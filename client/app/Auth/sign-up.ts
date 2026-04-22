type Credentials = {
  email: string
  password: string
}

type SignUpResponse = {
  message?: string
  data?: {
    id: number
    name: string
    email: string
  }
}

export const signUp = async (credentials: Credentials) => {
  const payload = {
    name: credentials.email,
    email: credentials.email,
    password: credentials.password,
  }

  const response = await fetch(`http://localhost:8080/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  const data = (await response.json()) as SignUpResponse
  return {
    ok: response.ok,
    data,
  }
}

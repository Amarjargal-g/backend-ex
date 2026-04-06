"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const SignUp = (_credentials: { email: string; password: string }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    }

    await fetch("/api/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
  }

  return (
    <div className="mt-100 ml-50 flex flex-col justify-center">
      <Input
        placeholder="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={onSubmit}>Sign Up</Button>
    </div>
  )
}

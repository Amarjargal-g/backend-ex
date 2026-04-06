"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async () => {
    const credentials = { email, password }

    await fetch("/api/users", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col bg-white px-8 pt-12">
      <Link
        href="/"
        className="mb-10 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
      >
        ‹
      </Link>

      <h1 className="mb-2 text-3xl font-bold text-gray-900">Log in</h1>
      <p className="mb-8 text-gray-400">
        Log in to enjoy your favorite dishes.
      </p>

      <div className="mb-4 flex flex-col gap-4">
        <Input
          placeholder="example@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-gray-800 placeholder-gray-400 transition-colors outline-none focus:border-gray-400"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-gray-800 placeholder-gray-400 transition-colors outline-none focus:border-gray-400"
        />
      </div>

      <Link
        href="/forgot-password"
        className="mb-8 w-fit text-sm text-gray-800 underline"
      >
        Forgot password ?
      </Link>

      <Button
        onClick={onSubmit}
        className="mb-6 w-full rounded-2xl bg-gray-900 py-4 text-base font-medium text-white transition-colors hover:bg-black"
      >
        Let's Go
      </Button>

      <p className="text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link href="/Sign-up" className="font-medium text-blue-500">
          Sign up
        </Link>
      </p>
    </div>
  )
}

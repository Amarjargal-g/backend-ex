"use client"

import { signIn } from "@/app/Auth/sign-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please enter email and password.")
      return
    }

    setError("")
    const credentials = { email, password }
    setIsSubmitting(true)
    try {
      const response = await signIn(credentials)
      if (response.ok && response.data?.accessToken) {
        document.cookie = `token=${response.data.accessToken}; path=/`
        router.push("/")
        return
      }

      setError("Invalid email or password.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-white">
      <div className="relative flex w-full items-center px-6 py-12 md:w-[42%] md:px-16 lg:px-20">
        <Link
          href="/"
          className="absolute top-8 left-6 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:bg-gray-50 md:top-10 md:left-10"
        >
          ‹
        </Link>

        <form onSubmit={onSubmit} className="mx-auto w-full max-w-md">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
            Welcome back
          </h1>
          <p className="mb-8 text-gray-500">
            Enter your details to access your account.
          </p>

          <div className="space-y-4">
            <Input
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border-gray-300 focus-visible:ring-1 focus-visible:ring-gray-400"
            />
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded-lg border-gray-300 focus-visible:ring-1 focus-visible:ring-gray-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 mb-6 h-12 w-full rounded-lg bg-gray-900 font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
          {error ? <p className="mb-6 text-sm text-red-500">{error}</p> : null}

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-blue-600 hover:underline"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden flex-1 overflow-hidden md:block">
        <img
          src="/delivery.png"
          alt="Food delivery rider on a city street"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

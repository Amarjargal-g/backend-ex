"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    const credentials = { email, password };
    setError("");

    const res = await fetch("/api/users", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data?.message ?? "Invalid credentials.");
      return;
    }

    router.push("/dashboard/orders");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex w-[40%] flex-col justify-center bg-white px-20">
      <Link
        href="/"
        className="absolute top-10 left-10 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:bg-gray-50"
      >
        ‹
      </Link>

      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
        Admin Sign In
      </h1>
      <p className="mb-8 text-gray-500">
        Enter your details to access the dashboard.
      </p>

      <div className="mb-4 flex flex-col gap-4">
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
        onClick={onSubmit}
        className="mb-6 h-12 w-full rounded-lg bg-gray-900 font-medium text-white transition-colors hover:bg-gray-800"
      >
        Sign In
      </Button>
      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <p className="text-center text-sm text-gray-500">
        Admin access only.
      </p>
      </div>

      <div className="flex-1 overflow-hidden">
        <img
          src="/loginpic.png"
          alt="Admin login"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

"use client";

import { Button, Input } from "@base-ui/react";
import Link from "next/link";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const credentials = { email, password };

    await fetch("/api/users", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
  };

  return (
    <div className="min-h-screen  bg-white flex flex-col px-8 pt-12 max-w-lg mx-auto">
      <Link
        href="/"
        className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors mb-10"
      >
        ‹
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Log in</h1>
      <p className="text-gray-400 mb-8">
        Log in to enjoy your favorite dishes.
      </p>

      <div className="flex flex-col gap-4 mb-4">
        <Input
          placeholder="example@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-4 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-4 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      <Link
        href="/forgot-password"
        className="text-sm underline text-gray-800 mb-8 w-fit"
      >
        Forgot password ?
      </Link>

      <Button
        onClick={onSubmit}
        className="w-full bg-gray-900 text-white py-4 rounded-2xl font-medium text-base hover:bg-black transition-colors mb-6"
      >
        Let's Go
      </Button>

      <p className="text-center text-gray-400 text-sm">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-500 font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
};

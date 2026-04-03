"use client";

import { Button, Input } from "@base-ui/react";
import { useState } from "react";

export const SignIn = (credentials: { email: string; password: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    };

    await fetch("/api/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    // try {
    //   const data = await signIn(credentials);
    //   localStorage.setItem("token", data?.accessToken);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const getCategoriest = async () => {
    await fetch("/api/categories");
  };

  return (
    <div className="flex flex-col justify-center mt-100 ml-50">
      <Input
        placeholder="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="password"
        // type="email"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={onSubmit}>Sign In</Button>
      {/* <Button onClick={getCategoriest} className="border bg-green-300">
        Get categories
      </Button> */}
    </div>
  );
};

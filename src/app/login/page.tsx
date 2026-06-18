"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  async function login() {

    await signIn(
      "credentials",
      {
        email,
        password,
        callbackUrl:
          "/dashboard"
      }
    );

  }

  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="glass p-8 rounded-3xl w-[400px]">

        <h1 className="text-3xl font-bold mb-5">
          Login
        </h1>

        <input
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-slate-900 mb-4"
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-slate-900 mb-4"
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={login}
          className="neon-btn w-full py-3"
        >
          Login
        </button>

      </div>

    </div>
  );
          }

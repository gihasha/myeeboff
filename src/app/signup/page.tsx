"use client";

import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Signup Failed");
      return;
    }

    alert("Signup Success");
    window.location.href = "/login";
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[400px] bg-zinc-900 p-8 rounded-xl">
        <h1 className="text-3xl mb-6">Signup</h1>

        <input
          className="w-full p-3 bg-zinc-800 mb-4"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 bg-zinc-800 mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 bg-zinc-800 mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-white text-black p-3 rounded-xl"
        >
          Create Account
        </button>
      </div>
    </div>
  );
      }

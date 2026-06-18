"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {

  const [stats, setStats] =
    useState({
      users:0,
      requests:0,
      services:0
    });

  useEffect(() => {

    fetch("/api/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data));

  }, []);

  return (

    <div className="min-h-screen p-10">

      <h1 className="text-5xl font-bold neon-text">
        Admin Panel
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="glass p-6 rounded-2xl">

          <h2>Total Users</h2>

          <p className="text-4xl mt-3">
            {stats.users}
          </p>

        </div>

        <div className="glass p-6 rounded-2xl">

          <h2>Total Requests</h2>

          <p className="text-4xl mt-3">
            {stats.requests}
          </p>

        </div>

        <div className="glass p-6 rounded-2xl">

          <h2>Services</h2>

          <p className="text-4xl mt-3">
            {stats.services}
          </p>

        </div>

      </div>

    </div>
  );
      }

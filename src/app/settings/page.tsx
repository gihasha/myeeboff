"use client";

import { useState } from "react";

export default function SettingsPage() {

  const [image, setImage] =
    useState<File | null>(null);

  const [imageUrl, setImageUrl] =
    useState("");

  async function uploadImage() {

    if (!image) return;

    const formData = new FormData();

    formData.append(
      "file",
      image
    );

    const res =
      await fetch(
        "/api/upload",
        {
          method: "POST",
          body: formData
        }
      );

    const data =
      await res.json();

    setImageUrl(
      data.imageUrl
    );

    alert(
      "Profile Image Uploaded"
    );
  }

  return (

    <div className="min-h-screen p-10">

      <h1 className="text-5xl font-bold neon-text">
        Settings
      </h1>

      <div className="glass p-8 rounded-3xl mt-10">

        <h2 className="text-2xl mb-5">
          Profile Picture
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(
              e.target.files?.[0] || null
            )
          }
        />

        <button
          onClick={uploadImage}
          className="neon-btn px-6 py-3 mt-5"
        >
          Upload
        </button>

        {imageUrl && (

          <img
            src={imageUrl}
            alt="Profile"
            className="w-40 h-40 rounded-full mt-6"
          />

        )}

      </div>

    </div>

  );
  }

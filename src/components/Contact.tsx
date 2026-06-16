"use client";

import { useState } from "react";

export default function Contact() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    whatsapp:"",
    service:"",
    description:""
  });

  async function sendRequest() {

    await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    });

    alert("Request Sent");
  }

  return (
    <section
      id="contact"
      className="py-24"
    >

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <input
          placeholder="Name"
          className="w-full p-3 bg-zinc-900 mb-4"
          onChange={(e)=>
            setForm({
              ...form,
              name:e.target.value
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full p-3 bg-zinc-900 mb-4"
          onChange={(e)=>
            setForm({
              ...form,
              email:e.target.value
            })
          }
        />

        <input
          placeholder="WhatsApp"
          className="w-full p-3 bg-zinc-900 mb-4"
          onChange={(e)=>
            setForm({
              ...form,
              whatsapp:e.target.value
            })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 bg-zinc-900 mb-4 h-40"
          onChange={(e)=>
            setForm({
              ...form,
              description:e.target.value
            })
          }
        />

        <button
          onClick={sendRequest}
          className="bg-white text-black px-8 py-3 rounded-xl"
        >
          Send Request
        </button>

      </div>

    </section>
  );
                     }

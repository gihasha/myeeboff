"use client";

import { useState } from "react";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    description: ""
  });

  async function sendRequest() {

    setLoading(true);

    try {

      const res = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      if (res.ok) {

        alert(
          "✅ Request Sent Successfully"
        );

        setForm({
          name: "",
          email: "",
          whatsapp: "",
          service: "",
          description: ""
        });

      } else {

        alert(
          "❌ Failed To Send Request"
        );

      }

    } catch {

      alert(
        "❌ Network Error"
      );

    }

    setLoading(false);
  }

  return (

    <section
      id="contact"
      className="py-24 px-6"
    >

      <div className="max-w-4xl mx-auto">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="text-center text-zinc-400 mb-10">
          Send your project details and
          I will contact you shortly.
        </p>

        <div className="glass rounded-3xl p-8">

          <div className="grid md:grid-cols-2 gap-5">

            <input
              value={form.name}
              placeholder="Your Name"
              className="bg-slate-900 border border-sky-500/20 p-4 rounded-xl outline-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            <input
              value={form.email}
              placeholder="Your Email"
              className="bg-slate-900 border border-sky-500/20 p-4 rounded-xl outline-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />

            <input
              value={form.whatsapp}
              placeholder="WhatsApp Number"
              className="bg-slate-900 border border-sky-500/20 p-4 rounded-xl outline-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  whatsapp: e.target.value
                })
              }
            />

            <select
              value={form.service}
              className="bg-slate-900 border border-sky-500/20 p-4 rounded-xl outline-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  service: e.target.value
                })
              }
            >

              <option value="">
                Select Service
              </option>

              <option>
                Meta Verified Badge
              </option>

              <option>
                Domain Create
              </option>

              <option>
                Website Builder
              </option>

              <option>
                UI / UX Design
              </option>

              <option>
                WhatsApp Services
              </option>

              <option>
                TikTok Boost
              </option>

              <option>
                Telegram Bot
              </option>

              <option>
                Automated Systems
              </option>

            </select>

          </div>

          <textarea
            value={form.description}
            placeholder="Describe Your Requirement..."
            className="w-full bg-slate-900 border border-sky-500/20 p-4 rounded-xl outline-none mt-5 h-40"
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value
              })
            }
          />

          <button
            onClick={sendRequest}
            disabled={loading}
            className="neon-btn w-full py-4 mt-6 text-lg font-semibold"
          >
            {loading
              ? "Sending..."
              : "Send Request"}
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="glass p-6 rounded-2xl text-center">

            <h3 className="text-sky-400 font-bold">
              Email
            </h3>

            <p className="mt-2 text-zinc-300">
              dasunkalharaofficialverifi@gmail.com
            </p>

          </div>

          <div className="glass p-6 rounded-2xl text-center">

            <h3 className="text-sky-400 font-bold">
              WhatsApp
            </h3>

            <p className="mt-2 text-zinc-300">
              +94 765 775 550
            </p>

          </div>

          <div className="glass p-6 rounded-2xl text-center">

            <h3 className="text-sky-400 font-bold">
              Availability
            </h3>

            <p className="mt-2 text-zinc-300">
              24 / 7 Support
            </p>

          </div>

        </div>

      </div>

    </section>

  );
        }

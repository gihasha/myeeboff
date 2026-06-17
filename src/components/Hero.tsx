import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-sky-400 font-semibold mb-4">
            Welcome To My Official Website
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="neon-text">
              Dasun Kalhara
            </span>
            <br />
            Official
          </h1>

          <p className="text-zinc-300 text-lg mt-6 leading-8">
            Professional Website Developer,
            UI / UX Designer,
            Automation Specialist,
            Meta Verified Badge Assistance,
            Domain Management &
            Digital Business Solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#contact"
              className="neon-btn px-8 py-3"
            >
              Contact Me
            </a>

            <a
              href="https://wa.me/94765775550"
              target="_blank"
              className="border border-sky-400 px-8 py-3 rounded-xl hover:bg-sky-500 hover:border-sky-500 transition"
            >
              WhatsApp
            </a>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-4 mt-10">

            <div className="glass p-4 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-sky-400">
                100+
              </h2>

              <p className="text-sm text-zinc-300">
                Clients
              </p>
            </div>

            <div className="glass p-4 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-sky-400">
                50+
              </h2>

              <p className="text-sm text-zinc-300">
                Projects
              </p>
            </div>

            <div className="glass p-4 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-sky-400">
                24/7
              </h2>

              <p className="text-sm text-zinc-300">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-sky-500 blur-[120px] opacity-30"></div>

            <Image
              src="/profile.png"
              alt="Dasun Kalhara"
              width={450}
              height={450}
              priority
              className="glow-image relative z-10"
            />

          </div>

        </div>

      </div>
    </section>
  );
          }

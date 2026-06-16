import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>

          <h1 className="text-6xl font-bold">
            Dasun Kalhara Official
          </h1>

          <h2 className="text-zinc-400 text-2xl mt-4">
            Transforming Ideas Into Digital Reality
          </h2>

          <p className="mt-6 text-zinc-300">
            Professional Web Developer,
            UI/UX Designer,
            Automation Specialist.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-xl"
            >
              Contact Me
            </a>

            <a
              href="https://wa.me/94765775550"
              className="border border-white px-6 py-3 rounded-xl"
            >
              WhatsApp
            </a>

          </div>

        </div>

        <div className="flex justify-center">

          <Image
            src="/profile.png"
            alt="Dasun"
            width={450}
            height={450}
            priority
          />

        </div>

      </div>

    </section>
  );
    }

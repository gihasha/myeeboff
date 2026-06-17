const services = [
  {
    title: "Meta Verified Badge",
    description:
      "Get assistance with Meta Verified Badge applications at affordable pricing.",
    icon: "✔️"
  },

  {
    title: "Domain Create",
    description:
      "Professional domain registration, setup and DNS configuration services.",
    icon: "🌐"
  },

  {
    title: "Website Builder & Hosting",
    description:
      "Modern business websites, portfolios, e-commerce and hosting solutions.",
    icon: "💻"
  },

  {
    title: "UI / UX Design",
    description:
      "Creative user interfaces and modern user experience designs.",
    icon: "🎨"
  },

  {
    title: "WhatsApp React Services",
    description:
      "WhatsApp automation, integrations and customer engagement systems.",
    icon: "📱"
  },

  {
    title: "TikTok Boost Service",
    description:
      "Increase visibility and reach with TikTok promotional services.",
    icon: "🚀"
  },

  {
    title: "Automated Systems",
    description:
      "Custom automation systems for businesses and online services.",
    icon: "⚙️"
  },

  {
    title: "Telegram Bot Development",
    description:
      "Custom Telegram bots with automation and business integrations.",
    icon: "🤖"
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="section-title">
          My Premium Services
        </h2>

        <p className="text-center text-zinc-400 mb-14 max-w-2xl mx-auto">
          Professional digital services designed to help
          individuals, creators and businesses grow online.
        </p>
<div className="glass rounded-3xl p-10 mt-20">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    <div>

      <h2 className="text-4xl font-bold neon-text mb-5">
        Meta Verified Badge
      </h2>

      <p className="text-zinc-300 leading-8">
        Need a Meta Verified Badge?
        I provide affordable assistance and guidance
        to help you through the verification process.
      </p>

      <a
        href="#contact"
        className="inline-block mt-6 neon-btn px-8 py-3"
      >
        Get Started
      </a>

    </div>

    <div className="flex justify-center">

      <div className="w-48 h-48 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400">

        <span className="text-7xl">
          ✔️
        </span>

      </div>

    </div>

  </div>

</div>
        <div className="grid md:grid-cols-4 gap-6">

          {services.map((service) => (

            <div
              key={service.title}
              className="neon-card rounded-2xl p-6"
            >

              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-sky-400 mb-3">
                {service.title}
              </h3>

              <p className="text-zinc-300 leading-7">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-block mt-6 neon-btn px-5 py-2"
              >
                Order Now
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
  }

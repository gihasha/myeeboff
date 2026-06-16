const services = [
  "Meta Verified Badge Assistance",
  "Domain Registration & Setup",
  "Website Builder & Hosting",
  "UI / UX Design & Development",
  "WhatsApp Automation",
  "TikTok Promotion",
  "Telegram Bot Development",
  "Automated Business Systems"
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
            >
              {service}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

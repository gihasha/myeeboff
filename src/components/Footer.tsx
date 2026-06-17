export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sky-500/20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold neon-text">
              Dasun Kalhara
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Professional Website Developer,
              UI / UX Designer,
              Automation Specialist &
              Digital Solutions Provider.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-sky-400 font-bold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-zinc-400">

              <li>Meta Verified Badge</li>

              <li>Website Builder</li>

              <li>Domain Create</li>

              <li>UI / UX Design</li>

              <li>Automation Systems</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-sky-400 font-bold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-zinc-400">

              <li>
                📧 dasunkalharaofficialverifi@gmail.com
              </li>

              <li>
                📱 +94 765 775 550
              </li>

              <li>
                📍 Sri Lanka
              </li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-sky-400 font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <a
                href="#home"
                className="text-zinc-400 hover:text-sky-400"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-zinc-400 hover:text-sky-400"
              >
                Services
              </a>

              <a
                href="#contact"
                className="text-zinc-400 hover:text-sky-400"
              >
                Contact
              </a>

              <a
                href="/login"
                className="text-zinc-400 hover:text-sky-400"
              >
                Login
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-sky-500/20 mt-10 pt-6 text-center">

          <p className="text-zinc-500">

            © {new Date().getFullYear()} Dasun Kalhara Official.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
          }

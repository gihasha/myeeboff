export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full glass z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold neon-text">
          Dasun Kalhara
        </h1>

        <div className="flex gap-6">

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a
            href="/login"
            className="neon-btn px-5 py-2"
          >
            Login
          </a>

        </div>

      </div>

    </nav>
  );
            }

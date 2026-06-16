export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Dasun Kalhara Official
        </h1>

        <div className="flex gap-6">

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a
            href="/login"
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            Login
          </a>

        </div>

      </div>

    </nav>
  );
}

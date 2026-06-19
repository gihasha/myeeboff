export default function DashboardPage() {
  return (
    <div className="min-h-screen p-10">

      <h1 className="text-4xl font-bold neon-text mb-8">
        Dashboard
      </h1>

      <div className="glass p-6 rounded-2xl max-w-md">

        <img
          src="/profile.png"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto"
        />

        <h2 className="text-center mt-4 text-xl font-bold">
          Dasun Kalhara
        </h2>

        <p className="text-center text-zinc-400 mt-2">
          Administrator
        </p>

      </div>

    </div>
  );
}

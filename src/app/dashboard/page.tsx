export default function Dashboard() {
  return (
    <div className="min-h-screen p-10">

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-zinc-900 p-6 rounded-xl">
          Profile
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Services
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Settings
        </div>

      </div>

    </div>
  );
}

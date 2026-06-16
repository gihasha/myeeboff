export default function SettingsPage() {
  return (
    <div className="min-h-screen p-10">

      <h1 className="text-5xl font-bold">
        Settings
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-zinc-900 p-6 rounded-xl">
          Account Settings
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Security Settings
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Language Settings
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Appearance Settings
        </div>

      </div>

    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="min-h-screen">

      <div className="flex">

        <aside className="w-72 bg-zinc-950 min-h-screen p-6">

          <h2 className="text-2xl font-bold mb-10">
            Admin Panel
          </h2>

          <ul className="space-y-4">

            <li>Dashboard</li>
            <li>Users</li>
            <li>Requests</li>
            <li>Services</li>
            <li>Analytics</li>

          </ul>

        </aside>

        <main className="flex-1 p-10">

          <h1 className="text-5xl font-bold">
            Admin Dashboard
          </h1>

        </main>

      </div>

    </div>
  );
      }

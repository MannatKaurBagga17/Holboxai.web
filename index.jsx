export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="p-6 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">California Best Docs</div>
        <a href="/login" className="border px-4 py-2 rounded-md text-blue-700">Sign in/up</a>
      </header>

      <main className="text-center mt-20 px-4">
        <h1 className="text-4xl font-bold">
          Find Trusted Care, <span className="text-blue-500">Effortlessly</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Search for Verified doctors and specialists in your area
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Specialty (e.g. Cardiologist)"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Location (e.g. San Francisco)"
            className="border p-2 rounded-md w-full"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Search Doctor</button>
        </div>
      </main>
    </div>
  );
}

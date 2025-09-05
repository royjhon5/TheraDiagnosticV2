export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-5xl font-bold">Welcome to My App 🚀</h1>
      <p className="mt-4 text-lg">This is the landing page.</p>

      <a
        href="/login"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </a>
    </main>
  );
}

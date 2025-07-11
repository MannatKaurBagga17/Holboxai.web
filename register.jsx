export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4">
          Sign Up
        </button>

        <div className="text-center mt-4 text-sm">
          Already have an account? <a href="/login" className="text-blue-600">Log in</a>
        </div>
      </div>
    </div>
  );
}

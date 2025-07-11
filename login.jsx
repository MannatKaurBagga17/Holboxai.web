export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome Back</h2>

        <input
          type="email"
          placeholder="Enter email or phone number"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />

        <div className="text-right mb-4 text-sm text-blue-500 cursor-pointer">
          Forgot password?
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4">
          Sign In
        </button>

        <div className="text-center mb-4">or continue with</div>

        <button className="w-full flex justify-center items-center gap-2 border py-2 rounded-md">
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" />
          Sign in with Google
        </button>

        <div className="text-center mt-6 text-sm">
          Don’t have an account? <a href="#" className="text-blue-600">Create account</a>
        </div>
      </div>
    </div>
  );
}

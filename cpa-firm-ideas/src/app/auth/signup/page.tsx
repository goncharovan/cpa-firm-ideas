"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/auth/signin?signup=success");
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">CPA Firm Ideas</h1>
        <h2 className="text-xl text-center text-gray-700 mb-8">Create your account</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
        <div className="my-6 flex items-center justify-center">
          <span className="text-gray-400">or</span>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="w-full border border-gray-300 py-2 rounded font-semibold hover:bg-gray-100 transition"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            type="button"
          >
            Sign up with Google
          </button>
          <button
            className="w-full border border-gray-300 py-2 rounded font-semibold hover:bg-gray-100 transition"
            onClick={() => signIn("linkedin", { callbackUrl: "/" })}
            type="button"
          >
            Sign up with LinkedIn
          </button>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Already have an account? <a href="/auth/signin" className="text-blue-700 hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  );
} 
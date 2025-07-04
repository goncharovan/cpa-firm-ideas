"use client";
import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProviders = async () => {
      const providersData = await getProviders();
      setProviders(providersData);
    };
    loadProviders();
  }, []);

  const validateForm = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!password.trim()) {
      setError("Password is required");
      return false;
    }
    if (!email.includes('@')) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setPassword("");
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">CPA Firm Ideas</h1>
        <h2 className="text-xl text-center text-gray-700 mb-8">Sign in to your account</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in with Email"}
          </button>
        </form>
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
        <div className="my-6 flex items-center justify-center">
          <span className="text-gray-400">or</span>
        </div>
        <div className="flex flex-col gap-2">
          {providers && Object.values(providers).map((provider: any) => {
            if (provider.id === 'credentials') return null;
            return (
              <button
                key={provider.name}
                className="w-full border border-gray-300 py-2 rounded font-semibold hover:bg-gray-100 transition"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            );
          })}
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Don&apos;t have an account? <a href="/auth/signup" className="text-blue-700 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
} 
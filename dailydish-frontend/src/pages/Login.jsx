import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      await login();
    } catch (err) {
      setError('Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 to-pink-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">DailyDish</h1>
          <p className="text-gray-600">Plan your meals, save your recipes</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-50 transition disabled:opacity-50 font-medium"
        >
          <FcGoogle size={24} />
          {isLoading ? 'Signing in...' : 'Continue with Google'}
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

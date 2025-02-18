"use client";

import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="flex h-screen items-center justify-center">
      <button 
        onClick={loginWithGoogle} 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
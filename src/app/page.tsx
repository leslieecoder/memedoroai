// HomePage.tsx
"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import puppyImage from "../../public/assets/mainlogo.png"; 
import Header from "../components/header"

const HomePage = () => {
  const { loginWithGoogle, user } = useAuth();

  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-400">

      <Header />

      {/* Display the imported image */}
      <Image 
        src={puppyImage} 
        alt="Cute puppy"
        width={500} 
        height={500} 
        className="mt-2"
      />
      
      <h1 className="text-3xl text-pink-600 font-bold">Welcome to Puppydoro</h1>
      <p className="text-xl text-pink-600">
        Your productivity app for managing time and tasks.
      </p>

      {user ? (
        <Link href="/dashboard">
          <button className="mt-6 px-6 py-2 bg-green-500 text-pink rounded-lg">
            Go to Dashboard
          </button>
        </Link>
      ) : (
        <button
          onClick={loginWithGoogle}
          className="mt-6 px-6 py-2 bg-pink-400 text-pink rounded-lg hover:bg-pink-500 transition"
        >
          Login with Google
        </button>
      )}
    </div>
  );
};

export default HomePage;

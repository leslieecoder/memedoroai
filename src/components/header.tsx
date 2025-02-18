import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiLogout } from "react-icons/hi"; // Importing Heroicons logout icon
import Logo from "../../public/assets/happypuppy.png"
import Image from "next/image";

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirect to the homepage after logging out
  };

  return (
    <header className="bg-yellow-100 text-white py-4 px-6 sm:px-12 mt-0 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
       <Image
                   src={Logo}
                   alt="Logo"
                   width={50}
                   height={50}
                   className="mx-auto "
                 />
        <span className="text-2xl font-bold text-pink-500">Puppy<span className="text-orange-400 text-2xl font-bold">doro</span></span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex space-x-6">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-blue-500 hover:text-orange-400 transition"
        >
          <HiLogout className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </nav>

      {/* Mobile Nav Button */}
      <button
        className="sm:hidden flex items-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="h-6 w-6 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-6 bg-gray-800 p-4 rounded-lg shadow-md sm:hidden">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-blue-500 hover:text-gray-400 transition"
          >
            <HiLogout className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

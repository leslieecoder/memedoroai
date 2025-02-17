"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "../lib/appwrite"; // Import Appwrite instance

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await account.get();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        router.push("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) return <p>Loading...</p>; // Show a loading state

  return <>{children}</>;
};

export default ProtectedRoute;

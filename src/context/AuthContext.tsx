"use client";
import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { account } from "@/lib/appwrite";
import { Models } from "appwrite"; 
import { useRouter } from "next/navigation";
import { OAuthProvider } from "appwrite";

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  loginWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch (error) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const redirectUrl = `${window.location.origin}/dashboard`;
      await account.createOAuth2Session(OAuthProvider.Google, redirectUrl, redirectUrl);
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.push("/"); // ✅ Redirect to homepage on logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // ✅ Redirect to dashboard when user logs in
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

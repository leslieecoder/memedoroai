"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PomodoroTimer from "@/components/PomodoroTimer";
import Header from "@/components/header";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); // Redirect to homepage if not logged in
    }
  }, [user, router]);

  if (!user) return null; // Prevents flicker

  return (
    <div className="flex flex-col justify-center  min-h-screen bg-blue-400">
      <Header/>
   
      <div className="flex items-center justify-center p-11 max-h-screen">
        <div className="px-10">
        <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
   

        </div>
    
      </div>

      

     <PomodoroTimer/>



    </div>
  );
};

export default Dashboard;

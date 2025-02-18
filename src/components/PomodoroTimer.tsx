import { useState, useEffect } from "react";
import Image from "next/image";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [puppyImage, setPuppyImage] = useState("/images/puppy.png"); // Default puppy
  const [danger, setDanger] = useState({ message: "", image: "" }); // Current danger
  const [puppyStatus, setPuppyStatus] = useState("Start your task to save the puppy!");
  const [savedDogs, setSavedDogs] = useState(0);

  const dangers = [
    { message: "Oh no! Save our little puppy from this crocodile!", image: "/images/crocodile.png" },
    { message: "Fire! Save the puppy from the flames!", image: "/images/fire.png" },
    { message: "A huge rock is about to fall! Help the puppy!", image: "/images/rock.png" },
    { message: "A tornado is coming! Finish your task to save the puppy!", image: "/images/tornado.png" },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      completeTask();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const randomDanger = dangers[Math.floor(Math.random() * dangers.length)]; // New random danger
      setPuppyImage("/images/puppy.png"); // Reset puppy to normal
      setDanger(randomDanger);
      setPuppyStatus(randomDanger.message);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(1500);
    setPuppyImage("/images/sad-puppy.png"); // Show sad puppy
    setDanger({ message: "", image: "" }); // Remove danger
    setPuppyStatus("The puppy didn't make it... Try again! 😢");
  };

  const completeTask = () => {
    setIsRunning(false);
    setSavedDogs((prev) => prev + 1);
    setPuppyImage("/images/happy-puppy.png"); // Happy puppy
    setDanger({ message: "", image: "" }); // Remove danger
    setPuppyStatus("You did it! The puppy is safe! 🐶🎉");
  };

  return (
    <div className="text-center p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-yellow-200">{puppyStatus}</h1>

      {/* Puppy Image */}
      <div className="flex justify-center items-center gap-4">
        
   
      <div className="mb-4">
        <Image
          src={puppyImage}
          alt="Puppy"
          width={300}
          height={300}
          className="mx-auto "
        />
      </div>

      {/* Danger Image (only shows when timer starts) */}
      {isRunning && danger.image && (
        <div className="mb-4">
          <Image
            src={danger.image}
            alt="Danger"
            width={300}
            height={300}
            className="mx-auto rounded-lg "
          />
        </div>
      )}

</div>

      

      <p className="text-8xl font-black mt-4">
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
      </p>

      {/* Buttons for starting and stopping the timer */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-6 py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 disabled:opacity-50 transition"
        >
          Start Task
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className="px-6 py-3 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 disabled:opacity-50 transition"
        >
          Stop / Reset
        </button>
      </div>

      <div className="p-5 rounded-lg bg-blue-300 m-7">

      <p className=" text-lg font-semibold text-white">🐶 Dogs Saved: {savedDogs}</p>

      </div>

      
    </div>
  );
};

export default PomodoroTimer;

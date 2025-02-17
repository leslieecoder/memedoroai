"use client";
import { useState } from 'react';
import MotivationModal from '@/components/MotivationalModal';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [motivationMessage, setMotivationMessage] = useState<string | null>(null);

  const handleSelectStyle = (style: string) => {
    setSelectedStyle(style);
    generateMotivationMessage(style); // Use AI or predefined messages to generate the message
    setIsModalOpen(false); // Close the modal after selection
  };

  const generateMotivationMessage = (style: string) => {
    switch (style) {
      case 'sassy':
        setMotivationMessage("You said you wanted success, not a nap. Get back to work! 😏");
        break;
      case 'go-girl':
        setMotivationMessage("Slay the task, girl! Then reward yourself with an overpriced latte ☕✨");
        break;
      case 'tough-love':
        setMotivationMessage("DO IT FOR THE GAINS! NOW MOVE! 🏋️");
        break;
      case 'guilt-trip':
        setMotivationMessage("Every time you procrastinate, a puppy gets sad. Do it for the puppy! 🐶😭");
        break;
      default:
        setMotivationMessage("Time to get to work!");
    }
  };

  return (
    <div>
      {isModalOpen && <MotivationModal onSelect={handleSelectStyle} onClose={() => setIsModalOpen(false)} />}
      
      {selectedStyle && (
        <div>
          <h2>Welcome to your Dashboard!</h2>
          <p>{motivationMessage}</p>
          {/* <PomodoroTimer /> */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;


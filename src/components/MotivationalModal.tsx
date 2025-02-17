import { FC } from 'react';

interface MotivationModalProps {
  onClose: () => void; // The onClose function does not take any arguments and returns nothing
  onSelect: (style: string) => void; // The onSelect function takes a string argument and returns nothing
}

const MotivationModal: FC<MotivationModalProps> = ({ onClose, onSelect }) => {
  return (
    <div className="modal">
      <h2>Pick Your Motivation Style</h2>
      <div className="buttons">
        <button onClick={() => onSelect('sassy')}>🔥 Sassy Queen Mode</button>
        <button onClick={() => onSelect('go-girl')}>💖 Go Girl Mode</button>
        <button onClick={() => onSelect('tough-love')}>🏋️ Tough Love Coach Mode</button>
        <button onClick={() => onSelect('guilt-trip')}>🐶 Guilt Trip Mode</button>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MotivationModal;

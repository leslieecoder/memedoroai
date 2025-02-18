import Image from "next/image";

interface Danger {
  image?: string;
}

interface PuppyDisplayProps {
  puppyImage: string;
  danger: Danger;
  puppyStatus: string;
}

const PuppyDisplay: React.FC<PuppyDisplayProps> = ({ puppyImage, danger, puppyStatus }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">{puppyStatus}</h1>

      {/* Puppy Image */}
      <Image src={puppyImage} alt="Puppy" width={300} height={300} className="mx-auto" />

      {/* Danger Image (only shows when timer starts) */}
      {danger.image && (
        <Image src={danger.image} alt="Danger" width={300} height={300} className="mx-auto mt-4" />
      )}
    </div>
  );
};

export default PuppyDisplay;

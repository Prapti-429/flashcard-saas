// components/Flashcard.tsx
import { useState } from "react";

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard = ({ question, answer }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleFlip} style={{ cursor: "pointer", border: "1px solid #ccc", padding: "20px", marginBottom: "10px" }}>
      {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
};

export default Flashcard;

// pages/flashcards.tsx
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Flashcard from "../components/Flashcard";
import Navbar from "../components/Navbar";

export default function Flashcards() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const flashcardsCollection = collection(db, "flashcards");
      const flashcardsSnapshot = await getDocs(flashcardsCollection);
      const flashcardsList = flashcardsSnapshot.docs.map(doc => doc.data());
      setFlashcards(flashcardsList);
    };

    fetchFlashcards();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h1>Your Flashcards</h1>
        {flashcards.map((flashcard, index) => (
          <Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
        ))}
      </main>
    </div>
  );
}

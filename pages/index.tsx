// pages/index.tsx
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to Flashcard SaaS</h1>
        <p>Create and manage your flashcards with ease!</p>
      </main>
    </div>
  );
}

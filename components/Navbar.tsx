// components/Navbar.tsx
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/flashcards">Flashcards</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          {isSignedIn ? <UserButton /> : <SignInButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

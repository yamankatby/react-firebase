import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { auth } from "../firebase";

const Home = () => {
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);

  return (
    <div>
      <h1>Hey, from Home component</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Home;

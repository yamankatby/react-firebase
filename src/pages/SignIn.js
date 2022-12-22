import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !password) {
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("hey, you have signed in ");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-4 bg-gray-100 rounded-md"
          value={password}
          onChange={(e) => setPasswrod(e.currentTarget.value)}
        />
        <input type="submit" className="p-4 bg-pink-400 rounded-md" />
        <Link to="/sign-up">Don't have an account? Sign up</Link>
      </form>
    </div>
  );
};

export default SignIn;

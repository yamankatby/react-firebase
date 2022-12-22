import { sendPasswordResetEmail } from "firebase/auth";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email) {
        return;
      }

      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert(
            "We have sent you a reset password email. Check your inbox. It may take 5 min"
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Forgot password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Send reset password email"
          className="p-4 bg-pink-400 rounded-md"
        />
        <Link to="/sign-in">Back to sign in</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;

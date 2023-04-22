import { signOut } from "firebase/auth";
import auth from "../firebase/firebase-config";
import { useState } from "react";

export default function useLogOut() {
  const [error, setError] = useState();
  const [pending, setPending] = useState();

  const logOut = () => {
    setPending(true);
    signOut(auth)
      .then(() => {
        console.log("Log out success");
      })
      .catch((error) => {
        setError(error.message);
      });
    setPending(false);
  };

  return { logOut, error, pending };
}

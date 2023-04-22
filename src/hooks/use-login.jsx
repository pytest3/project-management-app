import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase-config";
import { useState } from "react";

export default function useLogin() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [pending, setPending] = useState();

  const login = (email, password) => {
    setPending(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
    setPending(false);
  };

  return { login, user, error, pending };
}

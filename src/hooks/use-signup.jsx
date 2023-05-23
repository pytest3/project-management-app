import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase/firebase-config";

export default function useSignUp() {
  const [error, setError] = useState();
  const [pending, setPending] = useState();
  const [user, setUser] = useState();

  const signUp = (email, password) => {
    setPending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    setPending(false);
  };
  return { error, pending, user, signUp };
}

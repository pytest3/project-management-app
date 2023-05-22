import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase-config";
import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";

export default function useLogin() {
  const [error, setError] = useState();
  const [pending, setPending] = useState();

  const authCtx = useContext(AuthContext);
  const { dispatch } = authCtx;

  const login = (email, password) => {
    setPending(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: "login", payload: userCredential.user });
      })
      .catch((error) => {
        setError(error.message);
      });
    setPending(false);
    setError(null);
  };

  return { login, error, pending };
}

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import auth from "../firebase/firebase-config";

export const AuthContext = createContext({ user: null });

const authReducer = (state, action) => {
  if (action.type === "login") {
    return { ...state, user: action.payload };
  } else if (action.type === "logout") {
    return { ...state, user: null };
  } else if (action.type === "AUTH_IS_READY") {
    return { ...state, user: action.payload, authIsReady: true };
  } else {
    return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "login", payload: user });
      } else {
        dispatch({ type: "logout", payload: null });
      }
    });
    return unSub();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

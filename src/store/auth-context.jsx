import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import auth from "../firebase/firebase-config";

export const AuthContext = createContext({ user: null });

const authReducer = (state, action) => {
  if (action.type === "login") {
    return { user: action.payload };
  } else if (action.type === "logout") {
    return { user: action.payload };
  }
  return;
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    console.log("curte");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "login", payload: user });
      } else {
        dispatch({ type: "logout", payload: null });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

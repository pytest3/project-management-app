import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Root from "./pages/root";
import SignUpForm from "./components/SignUpForm";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase-config";
import { AuthContext } from "./store/auth-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "/signup", element: <SignUpForm /> },
    ],
  },
]);

function App() {
  const authCtx = useContext(AuthContext);
  const { dispatch } = authCtx;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "login", payload: user });
      } else {
        dispatch({ type: "logout", payload: null });
      }
    });
    return () => unSub();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;

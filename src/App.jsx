import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RootLayout from "./pages/root";
import SignUpForm from "./components/SignUpForm";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase-config";
import { AuthContext } from "./store/auth-context";
import HomePage from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import LandingPage from "./pages/Landing";
import ErrorPage from "./pages/Error";
import UserPage from "./pages/User";
import AccountPage from "./pages/Account";
import ProfilePage from "./pages/Profile";
import DashboardPage from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <SignUpForm /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/home",
            element: <HomePage />,
            children: [
              {
                path: "user",
                element: <UserPage />,
                children: [
                  { index: true, element: <ProfilePage /> },
                  { path: "profile", element: <ProfilePage /> },
                  { path: "account", element: <AccountPage /> },
                ],
              },
              {
                path: "dashboard",
                element: <DashboardPage />,
              },
              {
                index: true,
                element: <DashboardPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  const authCtx = useContext(AuthContext);
  const { dispatch, authIsReady } = authCtx;

  useEffect(() => {
    // 1. attach a listener that refers to in memory / local storage
    // 2. this listener only sends request to firebase when user login status
    // changes and not when attaching the listener itself
    console.log("shere");
    const unSub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    unSub();
    // unsubscribe from onAuthStateChanged listener
  }, [dispatch]);

  return (
    authIsReady && (
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    )
  );
}

export default App;

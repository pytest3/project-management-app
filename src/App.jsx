import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Root from "./pages/root";
import SignUpForm from "./components/SignUpForm";

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
  return <RouterProvider router={router} />;
}

export default App;

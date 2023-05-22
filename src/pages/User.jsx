import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Outlet, Link } from "react-router-dom";

export default function UserPage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Welcome {user.email}</h1>
      <Link to="profile">Profile</Link>
      <Link to="account">Account</Link>
      <Outlet />
    </>
  );
}

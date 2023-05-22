import { Outlet, Link } from "react-router-dom";

export default function UserPage() {
  return (
    <>
      <h1>User settings</h1>
      <Link to="profile">Profile</Link>
      <Link to="account">Account</Link>
      <Link to="account">Safey & Privacy</Link>
      <Outlet />
    </>
  );
}

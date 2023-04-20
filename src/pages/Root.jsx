import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function Root() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

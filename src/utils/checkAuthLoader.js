import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { redirect } from "react-router-dom";

export default function checkAuthLoader() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return redirect("/login");
  }
  return;
}

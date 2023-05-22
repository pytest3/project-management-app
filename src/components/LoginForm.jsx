import { useState } from "react";
import useLogin from "../hooks/use-login";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Navigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  const { user } = useContext(AuthContext);

  return (
    <>
      {error && <p>{error}</p>}
      {user && <Navigate replace to="/home"></Navigate>}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

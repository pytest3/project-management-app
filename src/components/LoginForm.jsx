import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Login Form</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="email">Password</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

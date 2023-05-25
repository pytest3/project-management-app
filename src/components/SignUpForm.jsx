import { useState } from 'react';
import useSignUp from '../hooks/use-signup';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    signUp(email, password);
  };
  return (
    <>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

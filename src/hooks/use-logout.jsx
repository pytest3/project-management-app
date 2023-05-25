import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase-config';
import { useContext, useState } from 'react';
import { AuthContext } from '../store/auth-context';

export default function useLogOut() {
  const [error, setError] = useState();
  const [pending, setPending] = useState();
  const authCtx = useContext(AuthContext);
  const { dispatch } = authCtx;

  const logOut = () => {
    setPending(true);
    signOut(auth)
      .then(() => {
        dispatch({ type: 'logout' });
      })
      .catch((error) => {
        setError(error.message);
      });
    setPending(false);
  };

  return { logOut, error, pending };
}

import { useEffect, useReducer, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const reducer = (state, action) => {
  if (action.type === 'ADDED_DOCUMENT') {
    return {
      isPending: false,
      document: action.payload,
      isError: false,
      isSuccess: true,
    };
  } else if (action.type === 'DELETE') {
    return;
  } else if (action.type === 'PENDING') {
    return {
      isPending: true,
      document: null,
      isError: null,
      isSuccess: false,
    };
  } else if (action.type === 'ERROR') {
    return {
      isPending: false,
      document: null,
      isError: action.payload,
      isSuccess: false,
    };
  } else return state;
};

const initialState = {
  document: null,
  isPending: false,
  isError: null,
  isSuccess: null,
};

export default function useFirestore(collectionName) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ignore, setIgnore] = useState(null);
  const collectionRef = collection(db, collectionName);

  const addDocument = (document) => {
    dispatch({
      type: 'PENDING',
    });
    addDoc(collectionRef, document)
      .then((docRef) => {
        if (!ignore) {
          dispatch({
            type: 'ADDED_DOCUMENT',
            payload: docRef,
          });

          // reset form here too i guess
        }
      })
      .catch((e) =>
        dispatch({
          type: 'ERROR',
          payload: e,
        }),
      );
  };

  const deleteDocument = () => {
    return;
  };

  // the below seEffect runs when component unmounts to prevent
  // state from being set (dispatch) when the promise returned from the
  // aync addDoc function resolves successfully
  useEffect(() => {
    setIgnore(true);
  }, []);

  return { addDocument, deleteDocument, state };
}

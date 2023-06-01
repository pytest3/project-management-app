import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useReducer } from 'react';
import { db } from '../firebase/firebase-config';

const reducer = (state, action) => {
  if (action.type === 'SUCCESS') {
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

export default function useFirestore(collectionPath) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const collectionRef = collection(db, collectionPath);

  const getDocument = (documentId) => {
    const docRef = doc(db, collectionPath, documentId);
    dispatch({
      type: 'PENDING',
    });
    getDoc(docRef)
      .then((docSnap) => dispatch({ type: 'SUCCESS', payload: docSnap.doc() }))
      .then((err) => {
        dispatch({ type: 'ERROR', payload: err });
      });
  };

  const addDocument = (document) => {
    dispatch({
      type: 'PENDING',
    });
    addDoc(collectionRef, document)
      .then((docRef) => {
        dispatch({
          type: 'SUCCESS',
          payload: docRef,
        });
        // reset form here too i guess
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

  const editDocument = (id, data) => {
    const docRef = doc(db, collectionPath, id);
    updateDoc(docRef, data)
      .then(() => console.log('Updated'))
      .catch((error) => console.log(error));
    return;
  };

  // the below seEffect runs when component unmounts to prevent
  // state from being set (dispatch) when the promise returned from the
  // aync addDoc function resolves successfully

  return {
    addDocument,
    getDocument,
    deleteDocument,
    editDocument,
    state,
  };
}

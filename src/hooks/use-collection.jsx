import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';

export default function useCollection(collectionName) {
  const [collectionData, setCollectionData] = useState([]);

  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, orderBy('title'));

  useEffect(() => {
    const unSub = onSnapshot(
      q,
      (snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          console.log(doc.uid);
          data.push({ id: doc.id, ...doc.data() });
        });
        setCollectionData(data);
      },
      (error) => {
        console.log(error);
      },
    );
    return () => unSub();
  }, [collectionName]);

  console.log('1');

  return { collectionData };
}

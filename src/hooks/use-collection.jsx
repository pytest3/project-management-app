import {
  collection,
  onSnapshot,
  // orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';

export default function useCollection(collectionName, queryParams) {
  const [collectionData, setCollectionData] = useState([]);
  const collectionRef = collection(db, collectionName);

  let queryRef = query(collectionRef);

  if (queryParams) {
    queryRef = query(
      collectionRef,
      // orderBy('title'),
      // where('userId', '==', user.uid),
      where(...queryParams),
    );
  }

  useEffect(() => {
    const unSub = onSnapshot(
      queryRef,
      (snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data(), path: doc.ref.path });
        });
        setCollectionData(data);
      },
      (error) => {
        console.log(error);
      },
    );
    return () => unSub();
  }, [collectionName]);

  return { collectionData };
}

import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase-config";

onSnapshot;

export default function useCollection(collectionName) {
  const [collectionData, setCollectionData] = useState([]);

  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, orderBy("title"));

  const getLiveCollection = useCallback(() => {
    const unSub = onSnapshot(q, (snapshot) => {
      let data = [];
      snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      setCollectionData(data);
      console.log(data);
    });

    return unSub;
  }, []);

  return { collectionData, getLiveCollection };
}

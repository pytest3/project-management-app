import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase-config";

onSnapshot;

export default function useCollection(collectionName) {
  const [collectionData, setCollectionData] = useState("");

  const collectionRef = collection(db, collectionName);

  const getLiveCollection = useCallback(() => {
    let data = [];
    const unSub = onSnapshot(collectionRef, (snapshot) =>
      snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
    );
    setCollectionData(data);
    return unSub;
  }, []);

  return { collectionData, getLiveCollection };
}

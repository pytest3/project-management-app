import { useEffect, useMemo, memo } from "react";
import useCollection from "../hooks/use-collection";

const ProjectList2 = ({ data }) => {
  const { collectionData, getLiveCollection } = useCollection("projects");

  useEffect(() => {
    const unSub = getLiveCollection();
    return () => unSub();
  }, []);

  return collectionData.map((item) => (
    <li key={item.id}>
      <div>title: {item.title}</div>
    </li>
  ));
};

export default memo(ProjectList2);

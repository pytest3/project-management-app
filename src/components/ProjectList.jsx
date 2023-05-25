import { useEffect, memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';

const ProjectList = ({ data }) => {
  const { collectionData, getLiveCollection } = useCollection('projects');

  useEffect(() => {
    const unSub = getLiveCollection();
    return () => unSub();
  }, []);

  return (
    <ul>
      {collectionData.map((item) => (
        <Project key={item.id}>
          <input type="checkbox" id="done" /> {item.title}
        </Project>
      ))}
    </ul>
  );
};

const Project = styled.article`
  margin-bottom: var(--space-2);
  color: var(--color-blueGray-800);
  display: flex;
  gap: var(--space-1);
`;

export default memo(ProjectList);

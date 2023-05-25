import { useEffect, memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';

const ProjectList2 = ({ data }) => {
  const { collectionData, getLiveCollection } = useCollection('projects');

  useEffect(() => {
    const unSub = getLiveCollection();
    return () => unSub();
  }, []);

  return collectionData.map((item) => (
    <Project key={item.id}>
      <div>
        <input type="checkbox" id="done" /> {item.title}
      </div>
    </Project>
  ));
};

const Project = styled.article`
  margin-bottom: var(--space-2);
`;

export default memo(ProjectList2);

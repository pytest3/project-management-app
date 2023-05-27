import { memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';

const ProjectList = () => {
  const { collectionData } = useCollection('projects');

  return (
    <Wrapper>
      {collectionData.map((item) => (
        <Project key={item.id}>
          <input type="checkbox" id="done" /> {item.title}
        </Project>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul``;
const Project = styled.article`
  margin-bottom: var(--space-2);
  color: var(--color-blueGray-800);
  display: flex;
`;

export default memo(ProjectList);

import { memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import Project from './Project';

const ProjectList = ({ showActive }) => {
  const { collectionData } = useCollection('projects');

  const projects = showActive
    ? collectionData.filter((i) => i.isComplete === false)
    : collectionData;

  return (
    <Wrapper>
      {projects.map((item) => (
        <Project key={item.id} item={item}></Project>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul``;

export default memo(ProjectList);

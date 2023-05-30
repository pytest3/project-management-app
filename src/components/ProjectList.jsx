import { memo, useContext } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import Project from './Project';
import { AuthContext } from '../store/auth-context';

const ProjectList = ({ showActive }) => {
  const { user } = useContext(AuthContext);
  console.log('here');
  const { collectionData } = useCollection('projects', [
    'userId',
    '==',
    user.uid,
  ]);

  const projects = showActive
    ? collectionData.filter((i) => i.isComplete === false)
    : collectionData;

  console.log('2');
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

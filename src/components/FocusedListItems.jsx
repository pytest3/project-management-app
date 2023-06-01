import { memo, useContext } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import Project from './Project';
import { AuthContext } from '../store/auth-context';
import { collection } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const FocusedListItems = ({ clickedDoc, showActive }) => {
  const { user } = useContext(AuthContext);

  const { id, userId, title } = clickedDoc;

  // const { collectionData } = useCollection('projects', [
  //   'userId',
  //   '==',
  //   user.uid,
  // ]);

  const { collectionData } = useCollection(`public lists/${id}/${title}`);

  // const nestedCollectionTitle = title;

  // const nestedCollectionPath = `${}`

  // const colRef = collection(db, 'public lists', id, nestedCollectionTitle);

  // const colRef2 = collection(db, 'public lists/l35l0rU9kU2WYQqHklzE/doc 1');
  // console.log(colRef2);
  // // onSnapShot(colRef, (snapshot)=>{}, (error)=>{})

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

export default memo(FocusedListItems);

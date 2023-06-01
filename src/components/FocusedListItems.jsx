import { memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import FocusedListItem from './FocusedListItem';

const FocusedListItems = ({ clickedDoc, showActive }) => {
  const { id, title, isPrivate } = clickedDoc;

  // const { collectionData } = useCollection('projects', [
  //   'userId',
  //   '==',
  //   user.uid,
  // ]);

  const { collectionData } = useCollection(
    `${isPrivate ? 'public lists' : 'public lists'}/${id}/${title}`,
  );

  // const nestedCollectionTitle = title;

  // const nestedCollectionPath = `${}`

  // const colRef = collection(db, 'public lists', id, nestedCollectionTitle);

  // const colRef2 = collection(db, 'public lists/l35l0rU9kU2WYQqHklzE/doc 1');
  // console.log(colRef2);
  // // onSnapShot(colRef, (snapshot)=>{}, (error)=>{})

  const filteredCollectionData = showActive
    ? collectionData.filter((i) => i.isComplete === false)
    : collectionData;

  return (
    <Wrapper>
      {filteredCollectionData.map((item) => (
        <FocusedListItem key={item.id} item={item}></FocusedListItem>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul``;

export default memo(FocusedListItems);

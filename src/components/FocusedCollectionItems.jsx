import { memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import FocusedCollectionItem from './FocusedCollectionItem';

const FocusedCollectionItems = ({ clickedDoc, showActive }) => {
  const { id, title, isPrivate } = clickedDoc;

  // const { collectionData } = useCollection('projects', [
  //   'userId',
  //   '==',
  //   user.uid,
  // ]);

  const { collectionItems } = useCollection(
    `${isPrivate ? 'public lists' : 'public lists'}/${id}/${title}`,
  );

  // const nestedCollectionTitle = title;

  // const nestedCollectionPath = `${}`

  // const colRef = collection(db, 'public lists', id, nestedCollectionTitle);

  // const colRef2 = collection(db, 'public lists/l35l0rU9kU2WYQqHklzE/doc 1');
  // console.log(colRef2);
  // // onSnapShot(colRef, (snapshot)=>{}, (error)=>{})

  const filteredCollectionItems = showActive
    ? collectionItems.filter((i) => i.isComplete === false)
    : collectionItems;

  return (
    <Wrapper>
      {filteredCollectionItems.map((collectionItem) => (
        <FocusedCollectionItem
          key={collectionItem.id}
          item={collectionItem}
          isPrivate={isPrivate}
        ></FocusedCollectionItem>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul``;

export default memo(FocusedCollectionItems);

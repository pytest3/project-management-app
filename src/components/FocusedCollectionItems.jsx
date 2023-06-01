import { memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import FocusedCollectionItem from './FocusedCollectionItem';

const FocusedCollectionItems = ({ clickedDoc, showActive }) => {
  const { id, title, isPrivate } = clickedDoc;

  const { collectionData } = useCollection(
    `${isPrivate ? 'public lists' : 'public lists'}/${id}/${title}`,
  );

  const filteredCollectionData = showActive
    ? collectionData.filter((i) => i.isComplete === false)
    : collectionData;

  return (
    <Wrapper>
      {filteredCollectionData.map((item) => (
        <FocusedCollectionItem
          key={item.id}
          collectionItem={item}
        ></FocusedCollectionItem>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul``;

export default memo(FocusedCollectionItems);

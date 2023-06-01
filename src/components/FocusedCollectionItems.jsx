import { memo } from 'react';
import useCollection from '../hooks/use-collection';
import styled from 'styled-components';
import FocusedCollectionItem from './FocusedCollectionItem';

const FocusedCollectionItems = ({ clickedDoc, showActive }) => {
  const { id, title, isPrivate } = clickedDoc;

  const collectionPath = `${
    isPrivate ? 'public lists' : 'public lists'
  }/${id}/${title}`;

  const { collectionData } = useCollection(collectionPath);

  const filteredCollectionData = showActive
    ? collectionData.filter((i) => i.isComplete === false)
    : collectionData;

  return (
    <Wrapper>
      {filteredCollectionData.map((item) => (
        <FocusedCollectionItem
          key={item.id}
          collectionItem={item}
          collectionPath={collectionPath}
        ></FocusedCollectionItem>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul``;

export default memo(FocusedCollectionItems);

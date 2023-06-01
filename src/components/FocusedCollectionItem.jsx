import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';

export default function FocusedCollectionItem({
  collectionItem,
  collectionPath,
}) {
  const { editDocument } = useFirestore(collectionPath);
  const { id, isComplete } = collectionItem;

  const clickHandler = () => {
    editDocument(id, { isComplete: !isComplete });
  };

  return (
    <Wrapper key={collectionItem.id} isComplete={isComplete}>
      <label>
        <input
          type="checkbox"
          id="checkbox"
          onClick={clickHandler}
          defaultChecked={isComplete}
        />
        {collectionItem.title}
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin-bottom: var(--space-2);
  color: var(--color-blueGray-800);
  display: flex;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : '')};
`;

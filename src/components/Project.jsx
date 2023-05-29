import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';

export default function Project({ item }) {
  const { editDocument } = useFirestore('projects');
  const { id, isComplete } = item;

  const clickHandler = () => {
    editDocument(id, { isComplete: !isComplete });
  };

  return (
    <Wrapper key={item.id} isComplete={isComplete}>
      <label>
        <input type="checkbox" id="checkbox" onClick={clickHandler} />
        {item.title}
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

import React, { useState } from 'react';
import styled from 'styled-components';
import FocusedListItems from '../components/FocusedListItems';

export default function FocusedList({ clickedDoc, handleShowForm }) {
  const [showActive, setShowActive] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Title>{clickedDoc.title}</Title>
        <AddButton
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
          onClick={handleShowForm}
        >
          <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
        </AddButton>
      </Header>
      <label>
        <input
          type="checkbox"
          onClick={() => setShowActive(!showActive)}
        ></input>
        Only show active
      </label>
      <FocusedListItems clickedDoc={clickedDoc || {}} showActive={showActive} />
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const AddButton = styled.svg`
  width: 30px;
  height: 30px;
  fill: var(--color-blueGray-600);
  margin-right: -5px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;

// const ProjectHeader = styled.h2`
//   margin-bottom: var(--space-4);
//   display: flex;
//   justify-content: space-between;
// `;

const Title = styled.div`
  font-size: var(--font-size-5);
  color: var(--color-blueGray-800);
  font-weight: var(--font-weight-medium);
  line-height: 1;
`;

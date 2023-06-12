import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import useFirestore from '../hooks/use-firestore';
export default function TaskDetails({ clickedFocusedDoc }) {
  const { details, title, id } = clickedFocusedDoc;
  // const documentPath = '';
  // const { editDocument } = useFirestore();

  console.log(clickedFocusedDoc);

  const formChangeHandler = () => {};

  return (
    <Wrapper key={id}>
      <Title>{title}</Title>
      {details ? (
        <StyledTextArea
          onChange={formChangeHandler}
          value={details}
        ></StyledTextArea>
      ) : (
        <StyledTextArea placeholder="Add a description"></StyledTextArea>
      )}
    </Wrapper>
  );
}

const StyledTextArea = styled.textarea`
  border: none;
  background-color: var(--color-gray-100);
  resize: none;
  &::placeholder {
    color: var(--color-blueGray-200);
    overflow: auto;
  }

  &:focus {
    outline: none;
    /* border: 1px solid var(--color-blueGray-300); */
  }

  &:active {
    outline: none;
    /* border: 1px solid var(--color-blueGray-300); */
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;
const Title = styled.div`
  font-size: var(--font-size-5);
  color: var(--color-blueGray-800);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  color: var(--color-blueGray-700);
  margin-bottom: var(--space-4);
`;

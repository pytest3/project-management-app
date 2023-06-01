import React, { useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';

export default function AddNestedItemsForm({ clickedDoc, closeForm }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const collectionPath = `/public lists/${clickedDoc.id}/${clickedDoc.title}`;

  const { addDocument } = useFirestore(collectionPath);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addDocument({ title, details, isComplete: false });
  };

  return (
    <Wrapper>
      <Title>Add Task</Title>
      <Form onSubmit={formSubmitHandler}>
        <label htmlFor="listName"></label>
        <input
          id="listName"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Name"
          name="title"
        ></input>
        <DetailsArea
          id="details"
          type="text-area"
          rows="4"
          cols="50"
          placeholder="Description"
          name="details"
          onChange={(e) => setDetails(e.target.value)}
        ></DetailsArea>
        <FormActions>
          <Button type="submit">Save</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              closeForm();
            }}
          >
            Cancel
          </Button>
        </FormActions>
      </Form>
    </Wrapper>
  );
}

const DetailsArea = styled.textarea`
  margin-top: var(--space-4);
`;
const Button = styled.button`
  width: 80px;
  font-size: var(--font-size-2);
  color: var(--color-blueGray-400);
`;
const FormActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: var(--space-3);
  padding-top: var(--space-4);
  margin-top: var(--space-4);
  border-top: 1px solid var(--color-blueGray-200);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: var(--font-size-5);
  color: var(--color-blueGray-800);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-5);
  margin-top: var(--space-6);
`;
const Wrapper = styled.div`
  position: absolute;
  margin: auto;
  padding: var(--space-2) var(--space-7);
  display: grid;
  grid-template-rows: 40px 220px;
  justify-items: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-large);
`;

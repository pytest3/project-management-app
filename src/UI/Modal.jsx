import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/use-firestore';
import { AuthContext } from '../store/auth-context';

export default function Modal({ closeForm, isPrivateForm }) {
  const [name, setName] = useState('');
  const { user } = useContext(AuthContext);
  const { addDocument: addPrivateDocument } = useFirestore('private lists');
  const { addDocument: addPublicDocument } = useFirestore('public lists');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    closeForm();
    if (isPrivateForm) {
      addPrivateDocument({ title: name, userId: user.uid, isPrivate: true });
    } else {
      addPublicDocument({ title: name, userId: user.uid, isPrivate: false });
    }
  };

  return (
    <Wrapper>
      <Title>Add {isPrivateForm ? 'Private' : 'Public'} List</Title>
      <Form onSubmit={formSubmitHandler}>
        <label htmlFor="listName"></label>
        <input
          id="listName"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        ></input>
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
  grid-template-rows: 40px 120px;
  justify-items: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius-large);
`;

import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PrivateListItem from './PrivateListItem';
import PublicListItem from './PublicListItem';
import Modal from '../UI/Modal';
import useCollection from '../hooks/use-collection';
import { AuthContext } from '../store/auth-context';

export default function Lists() {
  const [showAddForm, setShowAddForm] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user.uid);

  const { collectionData } = useCollection('private lists', [
    'userId',
    '==',
    user.uid,
  ]);

  console.log(collectionData);

  const handleOpenForm = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
    <Wrapper>
      {showAddForm && <Modal closeForm={handleCloseForm}></Modal>}
      <PrivateListWrapper>
        <HeaderWrapper>
          <HeaderText>Private lists</HeaderText>
          <AddButton
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            onClick={handleOpenForm}
          >
            <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
          </AddButton>
        </HeaderWrapper>
        <List>
          {collectionData.map((i) => (
            <PrivateListItem key={i.id}>{i.title}</PrivateListItem>
          ))}
        </List>
      </PrivateListWrapper>
      <PublicListWrapper>
        <HeaderWrapper>
          <HeaderText>Public lists</HeaderText>
          <AddButton
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            onClick={handleOpenForm}
          >
            <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
          </AddButton>
        </HeaderWrapper>
        <List>
          <PublicListItem>House chores</PublicListItem>
          <PublicListItem>Claire things</PublicListItem>
        </List>
      </PublicListWrapper>
    </Wrapper>
  );
}

const AddButton = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--color-blueGray-200);
  margin-right: -5px;
`;

const Wrapper = styled.div``;
const PrivateListWrapper = styled.div`
  margin-bottom: var(--space-3);
`;
const PublicListWrapper = styled(PrivateListWrapper)``;

const HeaderText = styled.h1`
  color: var(--color-blueGray-400);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
`;
const HeaderWrapper = styled.div`
  margin-bottom: var(--space-1);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const List = styled.ul``;

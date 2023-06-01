import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PrivateListItem from './PrivateListItem';
import PublicListItem from './PublicListItem';
import Modal from '../UI/Modal';
import useCollection from '../hooks/use-collection';
import { AuthContext } from '../store/auth-context';

export default function SideBarLists({ handleListClick }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [isPrivateForm, setIsPrivateForm] = useState(false);
  const { user } = useContext(AuthContext);

  const { collectionData: privateCollectionData } = useCollection(
    'private lists',
    ['userId', '==', user.uid],
  );

  const { collectionData: publicCollectionData } =
    useCollection('public lists');

  const handleOpenForm = (isPrivate) => {
    setShowAddForm(true);
    if (isPrivate === 'private') {
      setIsPrivateForm(true);
    } else {
      setIsPrivateForm(false);
    }
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
    <Wrapper>
      {showAddForm && (
        <Modal
          closeForm={handleCloseForm}
          isPrivateForm={isPrivateForm}
        ></Modal>
      )}
      <PrivateListWrapper>
        <HeaderWrapper>
          <HeaderText>Private lists</HeaderText>
          <AddButton
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            onClick={() => handleOpenForm('private')}
          >
            <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
          </AddButton>
        </HeaderWrapper>
        <ul>
          {privateCollectionData.map((i) => (
            <PrivateListItem key={i.id}>{i.title}</PrivateListItem>
          ))}
        </ul>
      </PrivateListWrapper>
      <PublicListWrapper>
        <HeaderWrapper>
          <HeaderText>Public lists</HeaderText>
          <AddButton
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            onClick={() => handleOpenForm('public')}
          >
            <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
          </AddButton>
        </HeaderWrapper>
        <ul>
          {publicCollectionData.map((i) => (
            <PublicListItem
              key={i.id}
              item={i}
              handleListClick={handleListClick}
            >
              {i.title}
            </PublicListItem>
          ))}
        </ul>
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

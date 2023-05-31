import React from 'react';
import styled from 'styled-components';

export default function PrivateListItem({ children }) {
  return (
    <Wrapper>
      <ListIcon
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="M160-200v-60h386v60H160Zm0-166v-60h640v60H160Zm0-167v-60h640v60H160Zm0-167v-60h640v60H160Z" />
      </ListIcon>
      <ListText>{children}</ListText>
      <OutstandingCount>3</OutstandingCount>
    </Wrapper>
  );
}

const OutstandingCount = styled.div`
  margin-left: auto;
  color: var(--color-blueGray-300);
  font-size: var(--font-size-2);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: var(--space-1);
`;
const ListIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--color-blueGray-300);
  margin-right: var(--space-2);
`;

const ListText = styled.div`
  color: var(--color-blueGray-700);
`;

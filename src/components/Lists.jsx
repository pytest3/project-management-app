import React from 'react';
import styled from 'styled-components';
import PrivateListItem from './PrivateListItem';
import PublicListItem from './PublicListItem';

export default function Lists() {
  return (
    <Wrapper>
      <PrivateListWrapper>
        <Header>Private lists</Header>
        <List>
          <PrivateListItem />
        </List>
      </PrivateListWrapper>
      <PublicListWrapper>
        <Header>Public lists</Header>
        <List>
          <PublicListItem>Clean the toilet</PublicListItem>
          <PublicListItem>Wash the dishes</PublicListItem>
        </List>
      </PublicListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const PrivateListWrapper = styled.div`
  margin-bottom: var(--space-3);
`;
const PublicListWrapper = styled(PrivateListWrapper)``;
const Header = styled.h1`
  color: var(--color-blueGray-400);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-1);
`;
const List = styled.ul``;

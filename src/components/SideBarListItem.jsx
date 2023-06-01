import React from 'react';
import styled from 'styled-components';

export default function SideBarListItem({ children, handleListClick, item }) {
  return (
    <Wrapper
      onClick={() => {
        handleListClick(item);
      }}
    >
      <ListIcon
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="M640-403q-51 0-84.5-33.5T522-521q0-51 33.5-84.5T640-639q51 0 84.5 33.5T758-521q0 51-33.5 84.5T640-403ZM400-160v-66q0-18.864 9-35.932T433-286q45-32 98.5-47.5T640-349q55 0 108 17t99 46q14 10 23.5 25.5T880-226v66H400Zm55-71v11h370v-11q-39-26-90-42t-95-16q-44 0-95.5 16T455-231Zm185-232q26 0 42-16t16-42q0-26-16-42t-42-16q-26 0-42 16t-16 42q0 26 16 42t42 16Zm0-58Zm0 301ZM120-410v-60h306v60H120Zm0-330v-60h473v60H120Zm349 165H120v-60h380q-11 13-18.727 27.921Q473.545-592.159 469-575Z" />
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
  border: 1px solid red;
  position: relative;
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

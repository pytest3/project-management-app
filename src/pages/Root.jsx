import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import styled from 'styled-components';

export default function Root() {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <OutletWrapper>
        <Outlet></Outlet>
      </OutletWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    'nav'
    'main';
  grid-template-rows: auto 1fr;
`;

const OutletWrapper = styled.div`
  grid-area: main;
`;

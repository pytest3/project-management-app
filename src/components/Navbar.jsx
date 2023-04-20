import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Wrapper>
      <h1>PM</h1>
      <NavbarActions>
        <Link to="/">Login</Link>
        <Link to="/signup">Create user</Link>
      </NavbarActions>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
`;

const NavbarActions = styled.div`
  display: flex;
  gap: 20px;
`;

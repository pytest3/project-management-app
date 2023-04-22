import { Link } from "react-router-dom";
import styled from "styled-components";
import useLogOut from "../hooks/use-logout";
import { AuthContext } from "../store/auth-context";
import { useContext } from "react";

export default function NavBar() {
  const { logOut } = useLogOut();
  const authCtx = useContext(AuthContext);
  const { user } = authCtx;

  return (
    <Wrapper>
      <h1>PM</h1>

      {user && <div>{user.email} is logged in </div>}
      <NavbarActions>
        <Link to="/">Login</Link>
        <Link to="/" onClick={logOut}>
          Logout
        </Link>
        <Link to="/signup">Signup</Link>
      </NavbarActions>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
`;

const NavbarActions = styled.div`
  display: flex;
  gap: 20px;
`;

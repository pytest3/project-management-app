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

      <NavbarActions>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Signup</Link>}
        {user && (
          <Link to="/login" onClick={logOut}>
            Logout
          </Link>
        )}
        {user && <Link to="/home">Home</Link>}
      </NavbarActions>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: space-between;
  background-color: hsl(210, 29%, 97%);
  padding: 4px 8px;
  grid-area: nav;
`;

const NavbarActions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
`;

import { Outlet, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export default function UserPage() {
  return (
    <>
      <h1>User settings</h1>
      <NavBar>
        <StyledLink to="profile">Profile</StyledLink>
        <StyledLink to="account">Account</StyledLink>
        <StyledLink to="privacy">Safey & Privacy</StyledLink>
      </NavBar>
      <Outlet />
    </>
  );
}

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  gap: 10px;
  border-bottom: 1px solid gray;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    border-bottom: 2px solid gray;
  }
`;

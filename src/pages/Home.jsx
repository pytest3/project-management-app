import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../store/auth-context";

export default function HomePage() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Wrapper>
      <Sidebar>
        <AvatarWrapper to="user">
          <AvatarImage src="/images/avatar.png"></AvatarImage>
        </AvatarWrapper>
        <StyledLink to="user">Hey {user.email}</StyledLink>
        <StyledLink to="dashboard">Dashboard</StyledLink>
        <StyledLink to="dashboard">New Project</StyledLink>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
`;
const AvatarWrapper = styled(Link)`
  display: grid;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
`;

const Sidebar = styled.div`
  background-color: #e9edc9;
  justify-items: center;
  display: grid;
  justify-content: center;
  align-content: start;
`;

const Main = styled.div`
  background-color: #ccd5ae;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
  height: 100%;
  padding: 16px 0px;
`;
const AvatarWrapper = styled(Link)`
  display: grid;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
`;

const Sidebar = styled.div`
  justify-items: center;
  display: grid;
  justify-content: center;
  align-content: start;
  padding: 16px;
  border-right: 1px solid gray;
`;

const Main = styled.div`
  padding: 16px 32px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

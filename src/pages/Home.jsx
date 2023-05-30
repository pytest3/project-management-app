import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../store/auth-context';

export default function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <Wrapper>
      <Sidebar>
        <AvatarWrapper to="user">
          <AvatarImage src="/images/avatar.png"></AvatarImage>
        </AvatarWrapper>
        <StyledLink to="dashboard">
          <HomeIcon
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M225.385-185.385h155.77v-245h197.69v245h155.77v-381.922L480-759.23 225.385-567.436v382.051Zm-45.384 45.384v-449.998L480-815.767l299.999 225.768v449.998H533.462v-245H426.538v245H180.001ZM480-472.615Z" />
          </HomeIcon>
        </StyledLink>
        <StyledLink to="user">
          <SettingsIcon
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="m400.693-100.001-18.077-120.231q-20.538-7-44.231-20.346-23.692-13.346-40.846-28.27l-111.846 50.923-79.922-141.306 101.077-74.384q-2-10.539-2.885-23-.885-12.462-.885-23 0-10.154.885-22.616t2.885-24.154l-101.077-74.769 79.922-140.152 111.461 50.154q18.308-14.924 41.231-28.078 22.924-13.154 43.847-19.538l18.461-121.231h158.614l18.077 120.615q22.077 8.154 44.154 20.231 22.077 12.077 39.769 28.001l113.384-50.154 79.538 140.152-102.615 74.308q2.769 11.923 3.462 24 .692 12.077.692 22.846 0 10.385-.885 22.154-.884 11.769-3.269 24.462l102.23 74.153-79.922 141.306-112.615-51.307q-18.692 15.692-40.346 28.962-21.654 13.269-43.577 19.654l-18.077 120.615H400.693Zm78.153-267.308q47.076 0 79.884-32.807 32.807-32.808 32.807-79.884t-32.807-79.884q-32.808-32.807-79.884-32.807-46.692 0-79.691 32.807-33 32.808-33 79.884t33 79.884q32.999 32.807 79.691 32.807Zm0-45.384q-27.846 0-47.577-19.73-19.73-19.731-19.73-47.577 0-27.846 19.73-47.577 19.731-19.73 47.577-19.73 28.231 0 47.769 19.73 19.539 19.731 19.539 47.577 0 27.846-19.539 47.577-19.538 19.73-47.769 19.73ZM480-480Zm-42.846 334.615h85.307L536.846-257q31.846-8 59.423-23.846 27.577-15.847 52.731-40.231l104.461 45.231 40-70.847L701-414.923q4-17.77 6.307-33.5 2.308-15.731 2.308-31.577 0-16.615-2-31.961T701-544.307l93.23-69-40-70.847-105.615 45.231q-21.077-23.692-50.846-41.769Q568-698.769 536.461-703l-13.615-111.615h-85.692l-13.231 111.231q-33.23 6.615-61.192 22.653-27.961 16.039-52.115 41.424L205.77-684.154l-40 70.847 92.461 67.846q-4.385 15.846-6.692 32.153-2.308 16.308-2.308 33.693 0 16.615 2.308 32.538 2.307 15.923 6.307 32.154l-92.076 68.23 40 70.847 104.461-44.847q24 24.385 52.154 40.231 28.154 15.846 61.154 23.846l13.615 111.231Z" />
          </SettingsIcon>
        </StyledLink>
        <StyledLink to="user">
          <LogoutIcon
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z" />
          </LogoutIcon>
        </StyledLink>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}

const HomeIcon = styled.svg`
  width: 40px;
  height: 40px;
  fill: var(--color-blueGray-300);
`;

const SettingsIcon = styled(HomeIcon)``;
const LogoutIcon = styled(HomeIcon)``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  height: 100%;
  padding: 16px 0px;
  background-color: var(--color-gray-100);
`;
const AvatarWrapper = styled(Link)`
  display: grid;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
`;

const Sidebar = styled.div`
  justify-items: center;
  display: grid;
  justify-content: center;
  align-content: start;
  padding: var(--space-2);
  border-right: 1px solid var(--color-blueGray-100);
`;

const Main = styled.div`
  padding: 16px 32px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

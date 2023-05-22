import { Outlet, useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";
import Home from "./Home";
import styled from "styled-components";

export default function Root() {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

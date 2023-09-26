import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <NavBar>
      <Logo
        alt="logo"
        src={process.env.PUBLIC_URL + "/img/logo.png"}
        onClick={() => {
          navigate("/");
        }}
      ></Logo>
      <Home
        alt="home"
        src={process.env.PUBLIC_URL + "/img/home.png"}
        onClick={() => {
          navigate("/");
        }}
      ></Home>

      <Noti
        alt="notification"
        src={process.env.PUBLIC_URL + "/img/noti.png"}
      ></Noti>
      <Search
        alt="search"
        src={process.env.PUBLIC_URL + "/img/search.png"}
      ></Search>
      <Line />
      <Face
        alt="Face id recognition"
        src={process.env.PUBLIC_URL + "/img/face.png"}
        onClick={() => {
          navigate("/login");
        }}
      ></Face>
      <Face2
        alt="Face id recognition"
        src={process.env.PUBLIC_URL + "/img/face.png"}
        onClick={() => {
          navigate("/mypage");
        }}
      ></Face2>
    </NavBar>
  );
}

const NavBar = styled.div`
  background-color: #ffffff;
  height: 10%;
  position: fixed;
  width: 100%;
  z-index: 999;
`;
const Logo = styled.img`
  left: 3vw;
  top: 2.5vh;
  position: absolute;
  width: 180px;
  height: 40px;
  @media screen and (max-width: 500px) {
    // 미디어 쿼리 부분 - 수정하면 된다~
    display: none;
  }
`;
const Home = styled.img`
  object-fit: cover;
  right: 23vw;
  top: 2.5vh;
  position: absolute;
  width: 2.5vw;
  height: 4.5vh;
`;
const Search = styled.img`
  object-fit: cover;
  right: 18vw;
  top: 2.5vh;
  position: absolute;
  width: 2.5vw;
  height: 4.5vh;
`;
const Noti = styled.img`
  object-fit: cover;
  right: 13vw;
  top: 2.5vh;
  position: absolute;
  width: 2.5vw;
  height: 4.5vh;
`;
const Line = styled.hr`
  object-fit: cover;
  right: 10vw;
  top: 1.5vh;
  position: absolute;
  border-left: thin solid #000000;
  height: 4%;
`;
const Face = styled.img`
  object-fit: cover;
  right: 4vw;
  top: 2.5vh;
  position: absolute;
  width: 2.5vw;
  height: 4.5vh;
`;
const Face2 = styled.img`
  object-fit: cover;
  right: 7vw;
  top: 2.5vh;
  position: absolute;
  width: 2.5vw;
  height: 4.5vh;
`;

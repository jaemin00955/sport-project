import { Icon,SearchField,Autocomplete } from "@aws-amplify/ui-react";
import styled from "styled-components";

export const NavBar = styled.div`
  background-color: #ffffff;
  height: 10%;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const Logo = styled.img`
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
export const Home = styled(Icon)`
  // color: blue;
  width: 6vw;
  height: 6vh;
  position: absolute;
  right: 25vw;
  top: 2vh;
`;
export const SearchInput = styled(Autocomplete)`
  position: absolute;
  width :20vw;
  height:4vh;
  right: 23vw;
  top:2.5vh;
  background-color:white;
`
// export const Search = styled(Icon)`
//   position: absolute;
//   width: 6vw;
//   height: 6vh;
//   right: 19vw;
//   top: 2vh;
// `;
export const Noti = styled(Icon)`
  position: absolute;
  width: 6vw;
  height: 6vh;
  right: 13vw;
  top: 2vh;
`;
// export const Line = styled(Icon)`
//   position: absolute;
//   width: 8vw;
//   height: 8vh;
//   right: 6vw;
//   top: 1vh;
// `;
export const Login = styled(Icon)`
  position: absolute;
  width: 6vw;
  height: 6vh;
  right: 2vw;
  top: 2vh;
`;
export const Logout = styled(Icon)`
  position: absolute;
  width: 6vw;
  height: 6vh;
  left: 20vw;
  top: 2vh;
`;
export const MyProfile = styled(Icon)`
  position: absolute;
  width: 6vw;
  height: 6vh;
  right: 2vw;
  top: 2vh;
`;

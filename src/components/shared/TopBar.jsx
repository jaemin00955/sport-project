import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import {
  AiOutlineSearch,
  AiOutlineNotification,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  Login,
  Logo,
  MyProfile,
  NavBar,
  Noti,
  Search,
  Line,
  Logout,
  SearchInput,
} from "../../styles/shared/TopBar.style";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { userState } from "../../states/stateUser";

export default function TopBar() {
  const navigate = useNavigate();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [userIdState, setUserIdState] = useRecoilState(userState);
  const queryClient = useQueryClient();
  const options = [];

  const signOutEvent = () => {
    signOut();
    setUserIdState({ userId: "" });
    console.log("userIdState:::", userIdState);
  };
  // const teamUrl = queryClient.getQueryData(["info"]);
  // const groupData = API.get("groupApi", `/group/${randomList[i]}`);
  // if (teamUrl) {
  //   const t = () => {
  //     teamUrl.map((data) => {
  //       const teamName = Object.keys(data)[0];
  //       const tempObj = {};
  //       tempObj.id = teamName;
  //       tempObj.label = teamName;
  //       options.push(tempObj);
  //     });
  //   };
  //   t();
  // }
  return (
    <NavBar>
      <Logo
        alt="logo"
        src={process.env.PUBLIC_URL + "/img/logo.png"}
        onClick={() => {
          navigate("/");
        }}
      ></Logo>
      {authStatus === "authenticated" && (
        <Logout as={AiOutlineLogout} onClick={signOutEvent} />
      )}
      <SearchInput
        label="Default autocomplete"
        options={options}
        placeholder="팀 검색"
      />
      {/* <Search as={AiOutlineSearch} /> */}
      <Noti as={AiOutlineNotification} />
      {authStatus === "authenticated" ? (
        <MyProfile
          as={CgProfile}
          onClick={() => {
            navigate("/mypage");
          }}
        />
      ) : (
        <Login
          as={AiOutlineLogin}
          onClick={() => {
            navigate("/login");
          }}
        />
      )}
    </NavBar>
  );
}

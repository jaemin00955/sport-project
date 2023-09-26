import React from "react";
import TopBar from "../components/shared/TopBar";
import { PlayerWraper, PlayerList } from "../styles/Team.style";
import NavBar from "../components/shared/NavBar";
import TeamLeft from "../components/team/TeamLeft";
import TeamRight from "../components/team/TeamRight";

export default function TeamPage() {
  return (
    <>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <PlayerWraper>
        <PlayerList></PlayerList>
      </PlayerWraper>
      <TeamLeft />
      <TeamRight />
    </>
  );
}

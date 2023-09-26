import React from "react";
import TopBar from "../components/shared/TopBar";
import FollowCategory from "../components/follow/FollowCategory";
import TeamList from "../components/follow/TeamList";
import Banner from "../components/shared/Banner";

export default function FollowPage() {
  return (
    <>
      <TopBar></TopBar>
      <Banner
        url="https://c.animaapp.com/Y55gjoIa/img/banner.png"
        height="25vh"
      ></Banner>
      <FollowCategory></FollowCategory>
      <TeamList></TeamList>
    </>
  );
}

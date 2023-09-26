import React from "react";
import TopBar from "../components/shared/TopBar";
import NavBar from "../components/shared/NavBar";
import CtgNavBar from "../components/media/CtgNavBar";
import TotalMedia from "../components/media/TotalMedia";

export default function MediaPage() {
  return (
    <>
      <TopBar></TopBar>
      <NavBar />
      <CtgNavBar />
      <TotalMedia></TotalMedia>
    </>
  );
}

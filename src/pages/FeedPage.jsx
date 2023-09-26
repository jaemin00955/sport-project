import React from "react";
import TopBar from "../components/shared/TopBar";
// import { CommentList, CommentWraper } from "../styles/Feed.style";
import NavBar from "../components/shared/NavBar";
import FeedLeft from "../components/feed/FeedLeft";
import FeedRight from "../components/feed/FeedRight";

export default function FeedPage() {
  return (
    <>
      <TopBar></TopBar>
      <NavBar />
      {/* <Carousel></Carousel> */}
      {/* <CommentWraper>
        <CommentList></CommentList>
      </CommentWraper> */}
      <FeedLeft></FeedLeft>
      <FeedRight></FeedRight>
    </>
  );
}

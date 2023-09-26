import React from "react";
import TopBar from "../components/shared/TopBar";
import {
  NoticeTextWraper,
  NoticeTitle,
  NoticeWraper,
  NoticeText,
} from "../styles/notice/Notice.style";
import NavBar from "../components/shared/NavBar";

export default function NoticePage() {
  return (
    <>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <NoticeWraper>
        <NoticeTitle>전체 공지사항</NoticeTitle>
        <NoticeTextWraper>
          <NoticeText>[안내] 안녕하세요...........</NoticeText>
          <NoticeText>ddd</NoticeText>
          <NoticeText>ddd</NoticeText>
          <NoticeText>ddd</NoticeText>
          <NoticeText>ddd</NoticeText>
          <NoticeText>ddd</NoticeText>
        </NoticeTextWraper>
      </NoticeWraper>
    </>
  );
}

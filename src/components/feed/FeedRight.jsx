import React from "react";
import {
  FeedContentRight,
  NoticeBox,
  NoticeBoxLists,
  NoticeBoxText,
  TeamImage,
} from "../../styles/feed/FeedRight.style";

export default function FeedRight() {
  return (
    <FeedContentRight>
      <TeamImage></TeamImage>
      <NoticeBox>
        <NoticeBoxText>공지사항</NoticeBoxText>
        <NoticeBoxLists></NoticeBoxLists>
      </NoticeBox>
    </FeedContentRight>
  );
}

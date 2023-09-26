import React from "react";
import {
  NoticeBox,
  NoticeBoxLists,
  NoticeBoxText,
  TeamContentRight,
} from "../../styles/team/TeamRight.style";

export default function TeamRight() {
  return (
    <TeamContentRight>
      <NoticeBox>
        <NoticeBoxText>공지사항</NoticeBoxText>
        <NoticeBoxLists></NoticeBoxLists>
      </NoticeBox>
    </TeamContentRight>
  );
}

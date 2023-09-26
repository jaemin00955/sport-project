import React from "react";
import {
  MyContentWraper,
  ContentLeft,
  ContentRight,
  MyPointWraper,
  MyProfileWraper,
  MyMediaText,
  MyMediaList,
  MyPointText,
  MyPointBox,
  MyProfileText,
  MyProfileCard,
  MyCardWraper,
} from "../../styles/my/MyContent.style";

export default function MyContent() {
  return (
    <MyContentWraper>
      <ContentLeft>
        <MyPointWraper>
          <MyPointText>나의 Point</MyPointText>
          <MyPointBox>100,000</MyPointBox>
        </MyPointWraper>
        <MyProfileWraper>
          <MyProfileText>나의 Profile</MyProfileText>
          <MyCardWraper>
            <MyProfileCard className="my-profile-card">ㄴㄴㄴㄴ</MyProfileCard>
            <MyProfileCard className="my-profile-card">ㄴㄴㄴㄴ</MyProfileCard>
            <MyProfileCard className="my-profile-card">ㄴㄴㄴㄴ</MyProfileCard>
            <MyProfileCard className="my-profile-card">ㄴㄴㄴㄴ</MyProfileCard>
          </MyCardWraper>
        </MyProfileWraper>
      </ContentLeft>
      <ContentRight>
        <MyMediaText>나의 Media 내역</MyMediaText>
        <MyMediaList>List 내역들 .....</MyMediaList>
      </ContentRight>
    </MyContentWraper>
  );
}

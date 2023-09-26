import React from "react";
import TopBar from "../components/shared/TopBar";
import {
  IntroImage,
  IntroPlayer,
  IntroPlayerText,
  IntroPlayerWraper,
  IntroTeamImage,
  IntroTeamName,
  IntroTeamText,
  IntroWraper,
  MediaCard,
  MediaCommentIcon,
  MediaCommentText,
  MediaDivider,
  MediaLikeIcon,
  MediaLikeText,
  MediaList,
  MediaText,
  MediaTime,
  MediaTitle,
} from "../styles/intro/Intro.style";

export default function IntroPage() {
  return (
    <>
      <TopBar></TopBar>
      <IntroWraper>
        <IntroImage></IntroImage>
        <IntroTeamImage></IntroTeamImage>
        <IntroTeamName>Arsenal</IntroTeamName>
        <IntroTeamText>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </IntroTeamText>
        <IntroPlayerText>탑 플레이어</IntroPlayerText>
        <IntroPlayerWraper>
          {/* <Carousel responsive={responsive}>
            <IntroPlayer>Item 1</IntroPlayer>
            <IntroPlayer>Item 1</IntroPlayer>
            <IntroPlayer>Item 1</IntroPlayer>
            <IntroPlayer>Item 1</IntroPlayer>
            <IntroPlayer>Item 1</IntroPlayer>
          </Carousel> */}
        </IntroPlayerWraper>
        <MediaText>미디어</MediaText>
        <MediaList>
          <MediaCard>
            <MediaTitle>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</MediaTitle>
            <MediaTime>10:10</MediaTime>
            <MediaDivider></MediaDivider>
            <MediaLikeIcon></MediaLikeIcon>
            <MediaLikeText>1000</MediaLikeText>
            <MediaCommentIcon></MediaCommentIcon>
            <MediaCommentText>112</MediaCommentText>
          </MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
        </MediaList>
      </IntroWraper>
    </>
  );
}

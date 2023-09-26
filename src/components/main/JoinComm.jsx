import React from "react";
import {
  Avatar,
  FollowBtn,
  JoinText,
  JoinWraper,
  LeagueName,
  SeeAllText,
  TeamMember,
  TeamName,
  TeamWraper,
} from "../../styles/main/JoinComm.style";
import { Line } from "../../styles/shared/Carousel.style";
// import { Avatar } from "../../styles/PostModal.style";
const dummyList = [
  {
    author: "hyun",
    content: "첫번째",
    emotion: 1,
  },
  {
    author: "jeong",
    content: "두번째",
    emotion: 2,
  },
  {
    author: "react",
    content: "3번째",
    emotion: 3,
  },
  {
    author: "react",
    content: "3번째",
    emotion: 3,
  },
  {
    author: "react",
    content: "3번째",
    emotion: 3,
  },
];

export default function JoinComm() {
  return (
    <JoinWraper>
      <JoinText className="joinText">Join Community</JoinText>
      <Line />
      <TeamWraper className="teamMember">
        {dummyList.map((it, index) => (
          <TeamMember key={index}>
            <Avatar className="avatar"></Avatar>
            <TeamName className="name">{it.author}</TeamName>
            <LeagueName className="league">{it.content}</LeagueName>
            <FollowBtn className="followBtn" alt="FollowBtn" />
          </TeamMember>
        ))}
      </TeamWraper>
      <SeeAllText className="see">See All +(Text)</SeeAllText>
    </JoinWraper>
  );
}

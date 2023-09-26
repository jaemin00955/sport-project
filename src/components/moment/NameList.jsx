import React from "react";
import {
  ListAvatar,
  ListCheckIcon,
  ListContainer,
  ListLayout,
  ListName,
  ListTeam,
} from "../../styles/moment/NameList.style";

export default function NameList() {
  return (
    <ListLayout>
      <ListContainer>
        <ListAvatar></ListAvatar>
        <ListName>
          Name
          <ListCheckIcon
            alt="divide"
            src={process.env.PUBLIC_URL + "/img/noti.png"}
          ></ListCheckIcon>
        </ListName>
        <ListTeam>Arsenal</ListTeam>
      </ListContainer>
      <ListContainer>
        <ListAvatar></ListAvatar>
        <ListName>
          Name
          <ListCheckIcon
            alt="divide"
            src={process.env.PUBLIC_URL + "/img/noti.png"}
          ></ListCheckIcon>
        </ListName>
        <ListTeam>Arsenal</ListTeam>
      </ListContainer>
      <ListContainer>
        <ListAvatar></ListAvatar>
        <ListName>
          Name
          <ListCheckIcon
            alt="divide"
            src={process.env.PUBLIC_URL + "/img/noti.png"}
          ></ListCheckIcon>
        </ListName>
        <ListTeam>Arsenal</ListTeam>
      </ListContainer>
    </ListLayout>
  );
}

import React from "react";
import {
  Avatar,
  FollowBtn,
  JoinText,
  JoinLayout,
  LeagueName,
  SeeAllText,
  TeamMember,
  TeamName,
  TeamContainer,
  Line,
} from "../../styles/main/JoinComm.style";
import { useNavigate } from "react-router-dom";
import { SlUserFollow } from "react-icons/sl";
import { API } from "aws-amplify";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = [];
  for (let i = 0; i < selectingNumber; i++) {
    const randomNum = Math.floor(Math.random() * totalIndex) + 1;
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
};

export default function JoinComm() {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const teamUrl = queryClient.getQueryData(["team"]);

  const getGroupData = async () => {
    const temp = [];
    const randomList = selectIndex(5, 5);
    for (let i = 0; i < 5; i++) {
      const tempObj = {};
      const groupData = await API.get("groupApi", `/group/${randomList[i]}`);
      tempObj.name = groupData[0].teamName;
      tempObj.url = groupData[0].teamUrl;
      temp.push(tempObj);
    }
    return temp;
  };
  const { data, isFetching } = useQuery(["group"], getGroupData, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isFetching) return;

  return (
    <JoinLayout>
      <JoinText className="joinText">Join Community</JoinText>
      <Line />
      <TeamContainer>
        {data.map((it, index) => (
          <TeamMember key={index}>
            <Avatar $url={it.url}></Avatar>
            <TeamName>{it.name}</TeamName>
            <LeagueName>{it.name}</LeagueName>
            <FollowBtn as={SlUserFollow} />
          </TeamMember>
        ))}
      </TeamContainer>
      <SeeAllText
        onClick={() => {
          navigate("/follow");
        }}
      >
        See All + Team
      </SeeAllText>
    </JoinLayout>
  );
}

import React from "react";
import TopBar from "../components/shared/TopBar";
// import { CommentList, CommentWraper } from "../styles/Feed.style";
import NavBar from "../components/shared/NavBar";
import FeedLeft from "../components/feed/FeedLeft";
import FeedRight from "../components/feed/FeedRight";
import Carousel from "../components/shared/Carousel";
import { useRecoilValue } from "recoil";
import { userState } from "../states/stateUser";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "aws-amplify";

export default function FeedPage() {
  const userIdState = useRecoilValue(userState);
  const queryClient = useQueryClient();

  const getUserTeamId = async (userId) => {
    const data = await API.get("userApi", `/info/${userId}`);
    await queryClient.setQueryData(["team"], data[0].userTeamId);
    return data[0].userTeamId;
  };
  const { data, isLoading, isError, isFetching } = useQuery(
    ["userTeamId"],
    () => getUserTeamId(userIdState.userId),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      // onSuccess: (data) => queryClient.setQueryData(["team"], data),
    }
  );
  if (isFetching) return <h3>Loading!!</h3>;

  return (
    <>
      <TopBar></TopBar>
      <NavBar />
      <Carousel></Carousel>
      {/* <CommentWraper>
        <CommentList></CommentList>
      </CommentWraper> */}
      <FeedLeft></FeedLeft>
      <FeedRight></FeedRight>
    </>
  );
}

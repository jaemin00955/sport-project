import React, { useState } from "react";

import { useModal } from "../../hooks/useModal";
import InfinityScroll from "../../utils/InfinityScroll";
import {
  CardLayout,
  PostContainer,
  Avatar,
  AvatarName,
  CheckIcon,
  DateTime,
  PostImage,
  MainText,
  LikeIcon,
  LikeText,
  ShareIcon,
  CommentIcon,
  CommentText,
  Divider,
} from "../../styles/shared/CardList.style";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "aws-amplify";

export default function CardList() {
  const { openModal } = useModal();
  const queryClient = useQueryClient();
  const myTeamName = [];
  const myTeamContentList = [];

  const query = async () => {
    const teamData = await queryClient.getQueryData(["info"]);
    teamData.forEach((value) => {
      var obj_key = Object.keys(value);
      myTeamName.push(obj_key[0]);
    });
    for (let i = 0; i < myTeamName.length; i++) {
      const postData = await API.get("postApi", `/post/${myTeamName[i]}`);
      for (let j = 0; j < postData[0]["postIdList"].length; j++) {
        await API.get(
          "postApi",
          `/content/${postData[0]["postIdList"][j]}`
        ).then((contentData) => {
          myTeamContentList.push(contentData[0]);
          // console.log(contentData[0].postImage.length);
        });
      }
    }
    queryClient.setQueryData(["teamData"], myTeamContentList);
    return myTeamContentList;
  };

  const { data, isFetching } = useQuery(["contents"], () => query(), {
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  if (isFetching) return;

  return (
    <CardLayout>
      {data.map((post, idx) => {
        return (
          <React.Fragment key={idx}>
            <PostContainer>
              <Avatar className="avatar" $url={post.postAvatar}></Avatar>
              <AvatarName className="avatarName">
                {post.postTitle}
                {post.checked && (
                  <CheckIcon
                    className="checkIcon"
                    alt="divide"
                    src={process.env.PUBLIC_URL + "/img/noti.png"}
                  ></CheckIcon>
                )}
              </AvatarName>

              <DateTime className="dateTime">{post.postDate}</DateTime>
              {post.postImage.length > 1 ? (
                <PostImage
                  className="postImage"
                  src={post.postImage[0]}
                ></PostImage>
              ) : post.postImage.length === 0 ? (
                <></>
              ) : (
                <PostImage
                  className="postImage"
                  src={post.postImage[0]}
                ></PostImage>
              )}
              <MainText className="main">{post.postText}</MainText>
              <Divider
                className="divider"
                alt="divide"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <LikeIcon
                className="likeIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <LikeText className="likeText">{post.postLikes}</LikeText>
              <CommentIcon
                className="commentIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
                onClick={() => openModal(post.postId)}
              />
              <CommentText className="commentText">
                {post.postComments}
              </CommentText>
              <ShareIcon
                className="shareIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
            </PostContainer>
            <div style={{ height: "100px" }}></div>
          </React.Fragment>
        );
      })}
    </CardLayout>
  );
}

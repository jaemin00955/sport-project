import React from "react";

import InfinityScroll from "../../utils/InfinityScroll";
import { useModal } from "../../hooks/useModal";
import {
  CommentInputWraper,
  CommentInputAvatar,
  CommentInputText,
  CommentInputImage,
  CommentCardWraper,
  CardAvatar,
  CardAvatarName,
  CardImage,
  CardText,
  ShareIcon,
  CheckIcon,
  DateTime,
  CardDivider,
  CardLikeIcon,
  CardLikeText,
  CardCommentIcon,
  CardCommentText,
  FeedContentLeft,
} from "../../styles/feed/FeedLeft.style";

export default function FeedLeft() {
  const { posts } = InfinityScroll();
  const { openModal } = useModal();

  return (
    <FeedContentLeft>
      <CommentInputWraper>
        <CommentInputAvatar></CommentInputAvatar>
        <CommentInputText>응원글을 입력해주세요.</CommentInputText>
        <CommentInputImage>aa</CommentInputImage>
      </CommentInputWraper>
      {posts.map((post, idx) => {
        return (
          <React.Fragment key={idx}>
            <CommentCardWraper>
              <CardAvatar className="avatar"></CardAvatar>
              <CardAvatarName className="avatarName">
                {post.contents}
                <CheckIcon
                  className="checkIcon"
                  alt="divide"
                  src={process.env.PUBLIC_URL + "/img/noti.png"}
                ></CheckIcon>
              </CardAvatarName>

              <DateTime className="dateTime">15 Dec 2020 at 09:42 AM</DateTime>
              <CardImage
                className="postImage"
                alt="divide"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              ></CardImage>
              <CardText className="main">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </CardText>
              <CardDivider
                className="divider"
                alt="divide"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <CardLikeIcon
                className="likeIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <CardLikeText className="likeText">260</CardLikeText>
              <CardCommentIcon
                className="commentIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
                onClick={() => openModal()}
              />
              <CardCommentText className="commentText">16</CardCommentText>
              <ShareIcon
                className="shareIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/ic.png"}
              />
            </CommentCardWraper>
            <div style={{ height: "100px" }}></div>
          </React.Fragment>
        );
      })}
    </FeedContentLeft>
  );
}

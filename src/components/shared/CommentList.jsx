import React from "react";
import {
  CommentAvatar,
  CommentAvatarName,
  CommentCheckIcon,
  CommentDateTime,
  CommentDivider,
  CommentIcon,
  CommentItem,
  CommentLikeIcon,
  CommentLikeNum,
  CommentNum,
  CommentText,
  CommentTotalNum,
  Container,
  Divider,
  InputCommentBox,
  InputCommentBtn,
  MediaDetailComment,
  ModalInputComment,
} from "../../styles/shared/CommentList.style";
import InfinityScroll from "../../utils/InfinityScroll";

const getCurrentScrollPercentage = () => {
  return (
    ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100
  );
};

export default function CommentList() {
  const { posts } = InfinityScroll();
  console.log(getCurrentScrollPercentage());
  return (
    <MediaDetailComment>
      {/* <MediaDetailComment position={getCurrentScrollPercentage()}> */}
      <CommentTotalNum>1000개의 댓글</CommentTotalNum>
      <Container>
        {posts.map((post, idx) => {
          return (
            <CommentItem>
              <CommentAvatar></CommentAvatar>
              <CommentAvatarName>
                {post.contents}
                <CommentCheckIcon
                  alt="divide"
                  src={process.env.PUBLIC_URL + "/img/noti.png"}
                ></CommentCheckIcon>
              </CommentAvatarName>

              <CommentDateTime>15 Dec 2020</CommentDateTime>
              <CommentText>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </CommentText>
              <Divider
                alt="divide"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <CommentLikeIcon
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <CommentLikeNum className="likeText">260</CommentLikeNum>
              <CommentIcon
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
              <CommentNum>16</CommentNum>
            </CommentItem>
          );
        })}
      </Container>
      <CommentDivider></CommentDivider>
      <ModalInputComment className="inputComment">
        <InputCommentBox></InputCommentBox>
        <InputCommentBtn>확인</InputCommentBtn>
      </ModalInputComment>
    </MediaDetailComment>
  );
}

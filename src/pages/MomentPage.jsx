import React from "react";
import TopBar from "../components/shared/TopBar";
import NameList from "../components/moment/NameList";
import CommentList from "../components/shared/CommentList";
import ShortVideo from "../components/moment/ShortVideo";

export default function MomentPage() {
  return (
    <>
      <TopBar></TopBar>
      <NameList></NameList>
      <ShortVideo></ShortVideo>
      <CommentList></CommentList>
      {/* <MomentComment>
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
        <CommentInput>
          <InputCommentBox placeholder="댓글을 입력하세요."></InputCommentBox>
          <InputCommentBtn>확인</InputCommentBtn>
        </CommentInput>
      </MomentComment> */}
    </>
  );
}

import React, { useRef } from "react";
import { useModal } from "../../hooks/useModal";
import {
  Avatar,
  AvatarName,
  CheckIcon,
  CommentAvatar,
  CommentAvatarName,
  CommentCheckIcon,
  CommentDateTime,
  CommentIcon,
  CommentItem,
  CommentLikeIcon,
  CommentLikeNum,
  CommentNum,
  CommentText,
  CommentTotalNum,
  ContentWraper,
  DateTime,
  Divider,
  Image,
  InputCommentBox,
  InputCommentBtn,
  LikeIcon,
  LikeText,
  MainText,
  ModalBody,
  ModalComments,
  ModalContents,
  ModalDimmer,
  ModalInputComment,
  ModalLeft,
  ModalLikes,
  ModalRight,
} from "../../styles/main/PostModal.style";
import InfinityScroll from "../../utils/InfinityScroll";

export default function PostModal() {
  const { posts } = InfinityScroll();
  const { modalDataState, closeModal } = useModal();
  const dimmerRef = useRef();

  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer
          ref={dimmerRef}
          onClick={(e) => {
            if (e.target === dimmerRef.current) {
              closeModal();
            }
          }}
        >
          <ModalBody>
            <ModalLeft>
              <ModalContents>
                <Avatar></Avatar>
                <AvatarName>
                  jaeminaaaaaaaaaaa
                  <CheckIcon
                    alt="divide"
                    src={process.env.PUBLIC_URL + "/img/noti.png"}
                  ></CheckIcon>
                </AvatarName>
                <DateTime>15 Dec 2020 at 09:42 AM</DateTime>
                <ContentWraper>
                  <Image
                    alt="image"
                    src={process.env.PUBLIC_URL + "logo512.png"}
                  ></Image>
                  <Image
                    alt="image"
                    src={process.env.PUBLIC_URL + "logo512.png"}
                  ></Image>
                  <Image
                    alt="image"
                    src={process.env.PUBLIC_URL + "logo512.png"}
                  ></Image>
                  <MainText>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </MainText>
                </ContentWraper>
              </ModalContents>
              <ModalLikes>
                <LikeIcon
                  alt="share"
                  src={process.env.PUBLIC_URL + "/img/noti.png"}
                />
                <LikeText>260</LikeText>
              </ModalLikes>
            </ModalLeft>
            {/* <hr></hr> */}
            <ModalRight>
              <CommentTotalNum>1000개의 댓글</CommentTotalNum>
              <ModalComments className="comments">
                {posts.map((post, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <CommentItem>
                        <CommentAvatar className="avatar"></CommentAvatar>
                        <CommentAvatarName className="avatarName">
                          {post.contents}
                          <CommentCheckIcon
                            className="checkIcon"
                            alt="divide"
                            src={process.env.PUBLIC_URL + "/img/noti.png"}
                          ></CommentCheckIcon>
                        </CommentAvatarName>

                        <CommentDateTime className="dateTime">
                          15 Dec 2020
                        </CommentDateTime>
                        <CommentText className="main">
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </CommentText>
                        <Divider
                          className="divider"
                          alt="divide"
                          src={process.env.PUBLIC_URL + "/img/noti.png"}
                        />
                        <CommentLikeIcon
                          className="likeIcon"
                          alt="share"
                          src={process.env.PUBLIC_URL + "/img/noti.png"}
                        />
                        <CommentLikeNum className="likeText">
                          260
                        </CommentLikeNum>
                        <CommentIcon
                          className="commentIcon"
                          alt="share"
                          src={process.env.PUBLIC_URL + "/img/noti.png"}
                        />
                        <CommentNum className="commentText">16</CommentNum>
                      </CommentItem>
                    </React.Fragment>
                  );
                })}
              </ModalComments>

              <ModalInputComment className="inputComment">
                <InputCommentBox></InputCommentBox>
                <InputCommentBtn>확인</InputCommentBtn>
              </ModalInputComment>
            </ModalRight>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  );
}

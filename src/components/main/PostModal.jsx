import React, { useEffect, useRef, useState } from "react";
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
  ModalLayout,
  ModalComments,
  ModalContainer,
  ModalDimmer,
  ModalInputComment,
  ModalLeft,
  ModalLikes,
  ModalRight,
  CancelBtn,
} from "../../styles/main/PostModal.style";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "aws-amplify";
import { MdOutlineCancel } from "react-icons/md";

function PostModal() {
  const queryClient = useQueryClient();
  const { modalDataState, closeModal } = useModal();
  const dimmerRef = useRef();

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const getCommentData = async () => {
    const modalData = await queryClient.getQueryData(["teamData"]);
    const filteredData = modalData.filter(
      (pData) => pData.postId === modalDataState.id
    );
    if (!filteredData[0]["commentIdList"]) {
      return [filteredData, []];
    }
    const commentData = [];
    for (let i = 0; i < filteredData[0]["commentIdList"].length; i++) {
      await API.get(
        "commentApi",
        `/comment/${filteredData[0]["commentIdList"][i]}`
      ).then((pComment) => {
        commentData.push(pComment[0]);
      });
    }
    return [filteredData, commentData];
  };

  const { data, isFetching } = useQuery(
    ["comment", modalDataState.id],
    () => getCommentData(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  if (isFetching) return;

  return (
    <>
      {modalDataState.isOpen && data && (
        <ModalDimmer
          ref={dimmerRef}
          onClick={(e) => {
            if (e.target === dimmerRef.current) {
              closeModal();
            }
          }}
        >
          <ModalLayout>
            <ModalLeft>
              <ModalContainer>
                <Avatar $url={data[0][0].postAvatar}></Avatar>
                <AvatarName>
                  {data[0][0].postTitle}
                  {data[0][0].checked && (
                    <CheckIcon
                      alt="divide"
                      src={process.env.PUBLIC_URL + "/img/noti.png"}
                    ></CheckIcon>
                  )}
                </AvatarName>
                <DateTime>{data[0][0].postDate}</DateTime>
                <ContentWraper>
                  {data[0][0].postImage.map((imageUrl, idx) => (
                    <Image key={idx} src={imageUrl}></Image>
                  ))}

                  <MainText>{data[0][0].postText}</MainText>
                </ContentWraper>
              </ModalContainer>
              <ModalLikes>
                <LikeIcon
                  alt="share"
                  src={process.env.PUBLIC_URL + "/img/noti.png"}
                />
                <LikeText>{data[0][0].postLikes}</LikeText>
              </ModalLikes>
            </ModalLeft>
            <ModalRight>
              <CommentTotalNum>{data[1].length}개의 댓글</CommentTotalNum>
              <CancelBtn
                as={MdOutlineCancel}
                onClick={() => closeModal()}
              ></CancelBtn>
              <ModalComments className="comments">
                {data[1].map((comment, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <CommentItem>
                        <CommentAvatar className="avatar"></CommentAvatar>
                        <CommentAvatarName className="avatarName">
                          {comment.contents}
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
          </ModalLayout>
        </ModalDimmer>
      )}
    </>
  );
}
export default React.memo(PostModal);

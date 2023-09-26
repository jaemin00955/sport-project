import React from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import InfinityScroll from "../../utils/InfinityScroll";

export default function CardList() {
  const { posts } = InfinityScroll();
  const { openModal } = useModal();
  const modalData = {
    title: "Modal Title",
    content: "Modal Content",
  };
  return (
    <Container>
      {posts.map((post, idx) => {
        return (
          <React.Fragment key={idx}>
            <PostItem>
              <Avatar className="avatar"></Avatar>
              <AvatarName className="avatarName">
                {post.contents}
                <CheckIcon
                  className="checkIcon"
                  alt="divide"
                  src={process.env.PUBLIC_URL + "/img/noti.png"}
                ></CheckIcon>
              </AvatarName>

              <DateTime className="dateTime">15 Dec 2020 at 09:42 AM</DateTime>
              <PostImage
                className="postImage"
                alt="divide"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              ></PostImage>
              <MainText className="main">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </MainText>
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
              <LikeText className="likeText">260</LikeText>
              <CommentIcon
                className="commentIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
                onClick={() => openModal(modalData)}
              />
              <CommentText className="commentText">16</CommentText>
              <ShareIcon
                className="shareIcon"
                alt="share"
                src={process.env.PUBLIC_URL + "/img/noti.png"}
              />
            </PostItem>
            <div style={{ height: "100px" }}></div>
          </React.Fragment>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
  position: absolute;
  width: 60vw;
  height: 100%;
  left: 28vw;
  top: 80vh;
`;
const PostItem = styled.div`
  width: 65vw;
  height: 55vh;
  border: 2px solid black;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  position: relative;

  & > .avatar {
    left: 20px;
    top: 20px;
  }
  & > .avatarName {
    left: 5vw;
    top: 2vh;
    & > .checkIcon {
      right: 3vw;
    }
  }

  & > .dateTime {
    left: 5vw;
    top: 4vh;
  }
  & > .postImage {
    left: 5vw;
    top: 8vh;
  }
  & > .main {
    left: 5vw;
    top: 39vh;
  }
  & > .divider {
    left: 2vw;
    top: 48vh;
  }
  & > .likeIcon {
    left: 3vw;
    bottom: 1.5vh;
  }
  & > .likeText {
    left: 6vw;
    bottom: 1.5vh;
  }
  & > .commentIcon {
    left: 10vw;
    bottom: 1.5vh;
  }
  & > .commentText {
    left: 13vw;
    bottom: 1.5vh;
  }
  & > .shareIcon {
    right: 20px;
    bottom: 1.5vh;
  }
`;

const Avatar = styled.div`
  background-color: #e8e8f0;
  border-radius: 23px/23px;
  height: 5.5vh;
  position: absolute;
  width: 3vw;
`;
const AvatarName = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 4vh;

  letter-spacing: 0;
  line-height: normal;
  position: absolute;

  width: 20vw;
`;
const CheckIcon = styled.img`
  object-fit: cover;
  position: absolute;
  width: 1.5vw;
  height: 3vh;
`;
const DateTime = styled.p`
  color: #9496a1;
  font-family: "Nunito Sans", Helvetica;
  font-size: 15px;
  font-weight: 400;
  height: 4vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 20vw;
`;
const PostImage = styled.img`
  background-color: #e8e8f0;
  border-radius: 16px;
  height: 32vh;
  position: absolute;
  width: 55vw;
`;
const MainText = styled.p`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 3vh;
  position: absolute;
  width: 55vw;
  word-wrap: break-word;
`;
const ShareIcon = styled.img`
  height: 3vh;
  width: 2.5vw;
  position: absolute;
`;
const CommentText = styled.div`
  color: #9496a1;
  font-family: "Nunito Sans", Helvetica;
  font-size: 25px;
  font-weight: 600;
  height: 3vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
`;
const CommentIcon = styled.img`
  height: 3vh;
  width: 2.5vw;
  position: absolute;
`;
const LikeText = styled.div`
  color: #5458f7;
  font-family: "Nunito Sans", Helvetica;
  font-size: 25px;
  font-weight: 600;
  height: 3vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
`;

const LikeIcon = styled.img`
  height: 3vh;
  width: 2.5vw;
  position: absolute;
`;
const Divider = styled.hr`
  height: 1px;
  position: absolute;
  width: 61vw;
`;

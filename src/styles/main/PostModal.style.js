import styled from "styled-components";

export const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
export const ModalBody = styled.div`
  // position: absolute;
  display: flex;
  width:80vw;
  height:88vh;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  background-color: #F3F3F6;
  border-radius: 30px;
`;

///// 모달 왼쪽 부분 시작 /////
export const ModalLeft = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
  width:70%;
  heigth:100%;
`

///// 모달 컨텐츠 부분 시작 /////
export const ModalContents = styled.div`
  position: absolute;
  width:97%;
  height:90%;
  top:1vh;
  left:1vw;
`;

export const Avatar = styled.div`
  position: absolute;
  background-color: #000000;
  border-radius: 50%;
  height: 8vh;
  width: 8vh;
`;
export const AvatarName = styled.div`
  position: absolute;
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 0;
  line-height: normal;
  top:1vh;
  left:6vw;
`;
export const CheckIcon = styled.img`
  position: absolute;
  object-fit: cover;
  width: 1.5vw;
  height: 3vh;
  margin-left:0.5vw;
`;
export const DateTime = styled.p`
  position: absolute;
  color: #9496a1;
  font-family: "Nunito Sans", Helvetica;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  top:2vh;
  left:7vw;
`;
export const ContentWraper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 90%;
  width: 100%; 
  top:9vh;
  background-color : #ffffff;
  box-shadow: 2px 2px 5px 5px black;
  `
export const Image = styled.img`
  border-radius: 10vw;
  width: 100%; 
`;
export const MainText = styled.p`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 3vh;
  width: 90%; 
  margin-left:2.5vw;
  word-wrap: break-word;
`;
///// 모달 컨텐츠 부분 끝 /////


///// 모달 Like 부분 시작 /////
export const ModalLikes = styled.div`
  position : absolute;
  width:100%;
  height:7%;
  top: 93%;
`;
export const LikeIcon = styled.img`
  height: 3vh;
  width: 2.5vw;
  position: absolute;
  left: 2vw;
  top: 30%;
`;
export const LikeText = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  left: 5vw;
  top: 35%;
`;
///// 모달 Like 부분 끝 /////
///// 모달 왼쪽 부분 끝 /////


///// Modal 오른쪽 부분 시작//////
export const ModalRight = styled.div`
  display: flex;
  flex-direction: column;
  width:30%;
  position:relative;
`
export const CommentTotalNum = styled.div`
  position:absolute;
  top:2vh;
  left:1vw;
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 1.8rem;
  font-weight: 900;
`
export const ModalComments = styled.div`
  border-bottom: 3px solid #cbcbcb;
  position:absolute;
  top:7vh;
  left:1vw;
  overflow-y: auto;
  overflow-x: hidden;
  width:95%;
  height:85%;
`;
export const CommentItem = styled.div`
  width: 21vw;
  height: 12vh;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  margin-bottom:2.5vh;
`;

export const CommentAvatar = styled.div`
  background-color: #e8e8f0;
  border-radius: 23px/23px;
  position: absolute;
  height: 3vh;
  width: 2vw;
  margin-left:1vw;
`;
export const CommentAvatarName = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 13px;
  font-weight: 600;
  position: absolute;
  height: 5vh;
  letter-spacing: 0;
  line-height: normal;
  width: 20vw;
  margin-left:3.5vw;
`;
export const CommentCheckIcon = styled.img`
  object-fit: cover;
  position: absolute;
  width: 1vw;
  height: 2vh;
`;
export const CommentDateTime = styled.p`
  color: #9496a1;
  font-family: "Nunito Sans", Helvetica;
  font-size: 10px;
  font-weight: 400;
  height: 4vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 5vw;
  margin-left:4vw;
  margin-top:2vh;
`;

export const CommentText = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.5vh;
  position: absolute;
  width: 80%;
  height:40%;
  word-wrap: break-word;
  overflow:hidden;
  margin-left:2vw;
  margin-top:3.5vh;
`;
export const CommentIcon = styled.img`
  position: absolute;
  height: 2vh;
  width: 1.5vw;
  margin-left:1vw;
  margin-top:9.5vh;
`;
export const CommentNum = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 13px;
  // font-weight: 600;
  height: 3vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
  margin-left: 2.5vw;
  margin-top:9.8vh;
`;
export const CommentLikeIcon = styled.img`
  height: 2vh;
  width: 1.5vw;
  position: absolute;
  margin-left:4vw;
  margin-top:9.5vh;
`;
export const CommentLikeNum = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 12px;
  // font-weight: 600;
  height: 3vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
  margin-left:5.5vw;
  margin-top:9.8vh;
`;
export const Divider = styled.hr`
  height: 1px;
  width: 90%;
  margin-left:1vw;
  margin-top:9vh;
  position: absolute;
`;
export const RightDivider = styled.hr`
  height: 1px;
  width: 90%;
  // margin-left:1vw;
  // margin-top:9vh;
  position: absolute;
`;

export const ModalInputComment = styled.div`
  position: absolute;
  width:100%;
  height:5vh;
  top:94%;
`;
export const InputCommentBox = styled.input`
  width:18vw;
  height:4vh;
`
export const InputCommentBtn = styled.button`
  width:4vw;
  height:3vh;
  margin-left:1vw;
`
///// Modal 오른쪽 부분 끝 //////





export const ModalButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 52px;
  font-weight: bold;
  :hover {
    opacity: 50%;
    transition: 0.5s;
  }
`;
export const ModalButtonWithBorder = styled(ModalButton)`
  border-right: 1px solid #cbcbcb;
`;

import styled from "styled-components";


//// Moment 댓글 부분 시작 /////
export const MomentComment = styled.div`
  position:absolute;
  left:74vw;
  top:13vh;
  width:25vw;
  height:70vh;
  border:1px solid;
`
export const CommentTotalNum = styled.div`
  position:absolute;
  top:1vh;
  left:3vw;
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 30px;
  font-weight: 900;
`
export const Container = styled.div`
  position:absolute;
  left:1vw;
  top:5vh;
  width: 24vw;
  height:56vh;
  overflow-y : auto;
  overflow-x : hidden;
`;
export const CommentItem = styled.div`
  width: 22vw;
  height: 12vh;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  margin-right:0;
  margin-bottom:1vh;
`;

export const CommentAvatar = styled.div`
  background-color: #e8e8f0;
  border-radius: 23px/23px;
  position: absolute;
  height: 3vh;
  width: 2vw;
  left:1vw;
  top:1vh;
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
  left:3.5vw;
  top:1vh;
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
  left:4vw;
  top:1.5vh;
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
  left:2.5vw;
  top:4vh;
`;
export const CommentIcon = styled.img`
  position: absolute;
  height: 1.5vh;
  width: 1vw;
  left:1vw;
  top:9.5vh;
`;
export const CommentNum = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 13px;
  font-weight: 600;
  height: 3vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
  left:2.5vw;
  top:9.8vh;
`;
export const CommentLikeIcon = styled.img`
  height: 1.5vh;
  width: 1vw;
  position: absolute;
  left:4vw;
  top:9.5vh;
`;
export const CommentLikeNum = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 3vh;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
  left:5.5vw;
  top:9.8vh;
`;
export const Divider = styled.hr`
  height: 1px;
  width: 90%;
  margin-left:1vw;
  margin-top:9vh;
  position: absolute;
`;
export const CommentDivider = styled.hr`
  border:0;
  height: 3px;
  width: 90%;
  position: absolute;
  left:1vw;
  bottom:7vh;
  background: #000000;
`;

export const CommentInput = styled.div`
  position: absolute;
  width:100%;
  height:8%;
  left:1vw;
  bottom:1vh;
`;
export const InputCommentBox = styled.input`
  border:1px solid;
  position: absolute;
  width:75%;
  height:100%;
  font-size:1.5rem;
`
export const InputCommentBtn = styled.button`
  position: absolute;
  width:3vw;
  height:100%;
  left:20vw;
`
//// Moment 댓글 부분 끝 /////

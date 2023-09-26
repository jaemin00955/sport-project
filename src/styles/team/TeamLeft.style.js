import styled from "styled-components";

// 컨텐트 왼쪽 시작 //
export const TeamContentLeft = styled.div`
  color: #000000;
  width:65%;
  height:80%;
  top:50%;
  position: absolute;
`;
// 코멘트 카드 시작 //
export const CommentCardWraper = styled.div`
  width: 70w;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  position: relative;
  left:4vw;
  top:8vh;
`;
export const CardAvatar = styled.div`
  background-color: #e8e8f0;
  border-radius: 50%;
  position: absolute;
  width: 5vw;
  height: 5vh;
  left:2vw;
  top:2vh;
`;
export const CardAvatarName = styled.div`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  left:8vw;
  top:2vh;
  height: 4vh;
  width: 20vw;
`;
export const CheckIcon = styled.img`
  object-fit: cover;
  position: absolute;
  width: 1.5vw;
  height: 3vh;
  left:9.5vw;
`;
export const DateTime = styled.p`
  color: #9496a1;
  font-family: "Nunito Sans", Helvetica;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 20vw;
  height: 4vh;
  left:8vw;
  top:4vh;
`;
export const CardImage = styled.img`
  background-color: #e8e8f0;
  border-radius: 16px;
  position: absolute;
  width: 50vw;
  height: 22vh;
  left:5vw;
  top:10vh;
`;
export const CardText = styled.p`
  color: #000000;
  font-family: "Nunito Sans", Helvetica;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 3vh;
  position: absolute;
  width: 55vw;
  word-wrap: break-word;
  left:5vw;
  top:30vh;
`;
export const ShareIcon = styled.img`
  position: absolute;
  height: 3vh;
  width: 2.5vw;
  left:55vw;
  top:40vh;
`;
export const CardCommentText = styled.div`
  color: #9496a1;
  font-family: "Nunito Sans", Helvetica;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 3vw;
  height: 3vh;
  left:8vw;
  top:40vh;
`;
export const CardCommentIcon = styled.img`
  height: 3vh;
  width: 2.5vw;
  position: absolute;
  left:5vw;
  top:40vh;
`;
export const CardLikeText = styled.div`
  color: #5458f7;
  font-family: "Nunito Sans", Helvetica;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  height: 3vh;
  width: 3vw;
  left:14vw;
  top:40vh;
`;
export const CardLikeIcon = styled.img`
  height: 3vh;
  width: 2.5vw;
  position: absolute;
  left:11vw;
  top:40vh;
`;
export const CardDivider = styled.hr`
  height: 1px;
  position: absolute;
  width: 90%;
  top:38vh;
  left:3vw;
`;
// 코멘트 카드 끝 //
// 컨텐트 왼쪽 끝 //

import styled from "styled-components";

// 미디어 동영상 리스트 부분 시작 // 
export const TotalMediaWraper = styled.div`
  background: #ffffff;
  position: absolute;
  width: 100%;
  left: 0vw;
  top:30%;
`;
export const TotalMediaText = styled.div`
position: absolute;
font-size : 3rem;
font-weight:900;
top: 15vh;
left: 5vw;
`;
export const MediaList = styled.div`
position: absolute;
display:flex;
flex-direction: row;
flex-wrap : wrap;
justify-content: space-evenly;
top: 25vh;
left: 1vw;
`;
export const MediaCard = styled.div`
  height: 25vh;
  width: 22vw;
  border: 1px solid;
  border-radius:3vw;
  margin-bottom:8vh;
  background-image: url(https://c.animaapp.com/QCcVY7YA/img/overlay-7@2x.png);
  background-size: cover;
  position:relative;
`;
export const MediaTitle = styled.div`
  position: absolute;
  left:1vw;
  top:15vh;
  width:90%;
  word-wrap: break-word;
  font-size : 1.5rem;
  font-weight:700;
`
export const MediaTime = styled.div`
  position: absolute;
  left:17vw;
  top:2vh;
  border: 1px solid;
  border-radius:3vw;
  width:3vw;
  height:2vh;
  text-align:center;
`
export const MediaDivider = styled.hr`
  position: absolute;
  left:1vw;
  top:20vh;
  width:90%;
`
export const MediaLikeIcon = styled.div`
  position: absolute;
  left:2vw;
  top:22vh;
  background-image: url(https://c.animaapp.com/ylMSSZ27/img/frame-7@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  width:2vw;
  height:2vh;
`
export const MediaLikeText = styled.div`
  position: absolute;
  left:4vw;
  top:22vh;
`
export const MediaCommentIcon = styled.div`
  position: absolute;
  left:6.5vw;
  top:22vh;
  background-image: url(https://c.animaapp.com/ylMSSZ27/img/frame-7@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  width:2vw;
  height:2vh;
`
export const MediaCommentText = styled.div`
  position: absolute;
  left:8.5vw;
  top:22vh;
`
// 미디어 동영상 리스트 부분 끝 // 


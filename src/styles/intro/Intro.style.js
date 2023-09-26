import styled from "styled-components";

export const IntroWraper = styled.div`
  width: 100%;
  // height:100vh;
  background-color: #161616;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items:center;
  top:10%;
`;
export const IntroImage = styled.div`
  background-image: url(https://c.animaapp.com/wxIRDo63/img/image-11-4.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 40vw;
  width: 80vh;
  margin-top:5vw;
`;
export const IntroTeamImage = styled.div`
background-image: url(https://c.animaapp.com/wxIRDo63/img/image-4@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 13vw;
  width: 18vh;
`;
export const IntroTeamName = styled.p`
color: #ffffff;
font-family: "Poppins", Helvetica;
font-size: 60px;
font-weight: 700;
margin-top:1vw;
`
export const IntroTeamText = styled.p`
top:78vh;
color: #ffffff;
font-family: "Poppins", Helvetica;
font-size: 40px;
font-weight: 700;
width:80%;
heigth:50%;
word-wrap: break-word;
`
export const IntroPlayerText = styled.p`
color: #ffffff;
font-family: "Poppins", Helvetica;
font-size: 40px;
font-weight: 700;
width:80%;
heigth:50%;
word-wrap: break-word;
`
export const IntroPlayerWraper = styled.div`
color: #ffffff;
font-family: "Poppins", Helvetica;
font-size: 40px;
font-weight: 700;
width:80%;
heigth:50%;
`
export const IntroPlayer = styled.div`
height: 8vh;
width: 14vw;
margin : 0 auto;
border:1px solid;
background: #000000;
`

// 미디어 부분 시작
export const MediaText = styled.p`
// position: absolute;
color: #ffffff;
font-family: "Poppins", Helvetica;
font-size: 40px;
font-weight: 700;
margin-left:-80vw;
`
// export const MediaList = styled.div`
// display:flex;
// flex-direction: row;
// flex-wrap : wrap;
// // top: 115vh;
// // height: 35vh;
// width: 100%;
// // margin-left:3vw;
// // border: 1px solid;
// // position: relative;
// `;

export const MediaList = styled.div`
// position: absolute;
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
  margin-bottom:10vh;
  background-image: url(https://c.animaapp.com/wxIRDo63/img/image-11-4.png);
  background-size: cover;
  color: #ffffff;
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
///// 미디어 부분 끝 /////

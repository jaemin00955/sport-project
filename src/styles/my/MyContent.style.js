import styled from "styled-components";

export const MyContentWraper= styled.div`
  width: 100%;
  height:100vh;
  top:38vh;
  position:absolute;
  display: flex;
  flex-direction: row;
`

// content의 왼쪽 부분 시작
export const ContentLeft= styled.div`
  width:35%;
  height: 100%;
  position:relative;
  display: flex;
  flex-direction: column;
`
export const MyPointWraper= styled.div`
  position:absolute;
  width:100%;
  height:30vh;
`
export const MyPointText= styled.div`
  font-family: "Nunito Sans", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  position:absolute;
  left : 5vw;
  top : 5vh;
`
export const MyPointBox= styled.div`
  position:absolute;
  width:20vw;
  height:10vh;
  left : 5vw;
  top : 10vh;
  border: 1px solid;
`
export const MyProfileWraper= styled.div`
  width:100%;
  height:40vh;
  top: 25vh;
  position:absolute;
`
export const MyProfileText= styled.div`
  font-family: "Nunito Sans", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  position:absolute;
  left : 5vw;
`
export const MyCardWraper= styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  height:30vh;
  left : 5vw;
  top: 5vh;
  width:20vw;
`
export const MyProfileCard= styled.div`
  height:10vh;
  left : 5vw;
  border: 1px solid;
`
// content의 왼쪽 부분 끝


// content의 오른쪽 부분 시작
export const ContentRight= styled.div`
position:relative;
width:65%;
  height: 100%;
`
export const MyMediaText = styled.div`
  font-family: "Nunito Sans", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  position:absolute;
  top : 5vh;
`;
export const MyMediaList = styled.div`
  position:absolute;
  top : 13vh;
  border: 1px solid;
  width: 50vw;
  height:40vh;
`;
// content의 오른쪽 부분 끝



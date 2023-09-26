import styled from "styled-components";

///// Moment 숏츠 부분 시작 /////
export const ShortsWraper = styled.div`
  background:#ffffff;
  position: absolute;
  width: 45vw;
  height: 70vh;
  left: 27vw;
  top:13vh;
  display:flex;
  flex-direction: column;
  border:4px solid;
`;
export const ShortsItem = styled.div`
  position: relative;
  background-color : blue;
  // background-image: url(https://c.animaapp.com/FwwlaWeF/img/union-5.svg);
  background-size: contain;
  background-repeat : no-repeat;
  width: 25vw;
  height: 70vh;
  margin :0 auto;
`
export const ShortsAvatar = styled.div`
  position: absolute;
  background-color : black;
  background-size: contain;
  background-repeat : no-repeat;
  border-radius:50%;
  width: 5vw;
  height: 5vw;
  left:1vw;
  top:1vh;
`
export const ShortsName = styled.div`
  position: absolute;
  background-color : #ffffff;
  font-size : 1.7rem;
  left: 7vw;
  top:3vh;
`
export const ShortsMain = styled.div`
  position: absolute;
  background-color : black;
  
  top:10vh;
  width: 100%;
  height: 35vw;
`
///// Moment 숏츠 부분 끝 /////

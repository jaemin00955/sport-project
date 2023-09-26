import styled from "styled-components";

// 동영상 미디어 부분 시작//
export const VedioWraper = styled.div`
  position: absolute;
  top:25vh;
  left:3vw;
  height: 60vh;
  width: 70vw;
  border:1px solid;
  border-radius:3vw;
  background-image: url(https://c.animaapp.com/QCcVY7YA/img/overlay-7@2x.png);
  background-size: cover;
`;
// 동영상 미디어 부분 끝//

//// 동영상 Text 부분 시작 ////
export const MediaDetailTextWraper = styled.div`
  position: absolute;
  width:60%;
  left:3vw;
  top:88vh;
  font-size:2.5rem;
  font-weight:800;
`
export const MediaDetailLikeIcon = styled.div`
background-image: url(https://c.animaapp.com/ylMSSZ27/img/frame-7@2x.png);
  position: absolute;
  width:4vw;
  height:5vh;
  left:65vw;
  top:88vh;
`
export const MediaDetailLikeText = styled.div`
  position: absolute;
  width:5%;
  left:70vw;
  top:90vh;
  font-size:1.5rem;
  font-weight:400;
`
export const MediaDetailDivider = styled.hr`
  border:0;
  height: 3px;
  width: 73%;
  position: absolute;
  left:2vw;
  top:95vh;
  background: #000000;
`;
export const MediaDetailDesc = styled.div`
  border:1px solid;
  height: 35vh;
  width: 73%;
  position: absolute;
  left:2vw;
  top:97vh;
`;
//// 동영상 Text 부분 끝 ////

//// 전체 동영상 부분 시작 ////


//// 전체 동영상 부분 끝 ////

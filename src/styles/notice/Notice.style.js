import styled from "styled-components";

// 배너 부분 시작 // 
export const BannerWraper = styled.div`
  background: linear-gradient(
    180deg,
    rgb(193.37, 74.13, 74.13) 0%,
    rgba(212.5, 136.35, 136.35, 0) 100%
  );
  position: absolute;
  width: 100%;
  height: 10%;
  left: 0vw;
  top:10%;
`;
export const BannerText = styled.div`
  height: 10vh;
  position: absolute;
  width: 90vh;
  left:15vw;
`;

export const FeedText = styled.div`
  position: absolute;
  height: 10vh;
  width: 10vw;
  left:0vw;
  top:3vh;
  font-size:2.5rem;
`;
export const TeamText = styled.div`
  height: 10vh;
  width: 10vw;
  position: absolute;
  left:30vw;
  top:3vh;
  font-size:2.5rem;
`;
export const MediaText = styled.div`
  height: 10vh;
  width: 10vw;
  position: absolute;
  top:3vh;
  left:60vw;
  font-size:2.5rem;
`;
// 배너 부분 끝 // 

//공지사항 부분 시작//
export const NoticeWraper = styled.div`
  position: absolute;
  width: 90%;
  left: 5vw;
  top:20%;
`;
export const NoticeTitle = styled.div`
  position: absolute;
  left: 5vw;
  top:5vh;
  font-size:2.5rem;
  font-weight:800;
`;
export const NoticeTextWraper = styled.div`
  position: absolute;
  left: 4vw;
  top:20vh;
  display:flex;
  flex-direction : column;
`;
export const NoticeText = styled.div`
    width: 80vw;
  left: 5vw;
  top:5vh;
  font-size:2.5rem;
  font-weight:500;
  margin-bottom:5vh;
  border-bottom:1px solid;
`;
//공지사항 부분 끝//


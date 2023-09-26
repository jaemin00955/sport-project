import styled from "styled-components";

// NavBar 부분 시작 // 
export const BannerContainer = styled.div`
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
export const NavText = styled.div`
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
// NavBar 부분 끝 // 

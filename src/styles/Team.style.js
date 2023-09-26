import styled from "styled-components";
import player from '../assets/PlayerBase.png';
import Ava from '../assets/AvatarDetail.svg';


// Player 캐러셀 부분 시작 //
export const PlayerWraper = styled.div`
  color: #000000;
  width: 100%;
  height: 35vh;
  top:20%;
  position: absolute;
  background : linear-gradient(180deg, #C14A4A 0%, rgba(212, 136, 136, 0.00) 100%);
`;
export const PlayerList = styled.div`
  position: absolute;
  color: #ffffff;
  width:90vw;
  heigth:30vh;
  left:5vw;
  top:3vh;
`;
export const PlayerItem = styled.div`
  position: relative;
  background-image: url(${player});
  background-size: contain;
  background-repeat : no-repeat;
  width: 18vw;
  height: 25vh;
  margin: 0 auto;
`
export const PlayerBackImage = styled.div`
  position: absolute;
  background-color: #0084ff;
  width: 97%;
  height: 8vw;
  border-radius:16px 16px 0 0;
`
export const PlayerAvatar = styled.div`
  position: absolute;
  background-color: #0084ff;
  border-radius: 50%;
  top: 14.5vh;
  left: 5.5vw;
  width: 7vw;
  height: 7vw;
`
export const AvatarDetail = styled.div`
  background-image: url(${Ava});
  position: absolute;
  top: 14.2vh;
  left: 5.2vw;
  width: 7.7vw;
  height: 7.7vw;
  background-repeat : no-repeat;
`
export const PlayerName = styled.div`
  height: 10vh;
  width: 10vw;
  position: absolute;
  top:11vh;
  left:6vw;
  font-size:1.8rem;
  color:#000000;
`;
export const PlayerCheckIcon = styled.img`
  object-fit: cover;
  position: absolute;
  width: 1.5vw;
  height: 2vh;
  left:4.5vw;
  top:0.5vh;
`;
// 댓글 캐러셀 부분 끝 //


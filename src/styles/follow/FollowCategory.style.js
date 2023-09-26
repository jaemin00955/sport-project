import styled from "styled-components";

// 카테고리 시작
export const CategoryWraper= styled.div`
  position: absolute;
  display:flex;
  flex-direction : column;
  // align-items:center;
  top: 40vh;
  left: 25vw;
  height: 33vh;
  width: 50vw;
  border: 1px solid;
`
export const CategoryText = styled.div`
  position: absolute;
  font-size:2rem;
  font-weight:700;
  left:2vw;
  top:1vh;
`
export const CategorySliderWraper = styled.div`
  position: relative;
  width: 65%;
  height: 5vh;
  top:7vh;
  left:10vw;
  // border:1px solid;
`;
export const CategoryItem = styled.div`
// position: absolute;
  height: 5vh;
  width: 4vw;
  border:1px solid;
  background: #000000;
  margin:0 auto;
  color:#ffffff;
  font-size:80%;
  font-weight:900;
  text-align:center;
  line-height : 5vh;
`;
export const Divider = styled.hr`
  height: 0.1vh;
  width: 80%;
  border:1px solid;
  background: #000000;
  position: absolute;
  top:12vh;
  left:5vw;
`;
export const League = styled.div`
  height: 3vh;
  width: 20%;
  border:1px solid;
  background: #000000;
  position: absolute;
  top:13vh;
`;
export const LeagueSliderWraper = styled.div`
  position: absolute;
  width: 90%;
  height: 10vh;
  top:20vh;
`;
// 카테고리 끝


// 팔로우 가능한 팀 부분 시작
export const TeamWraper = styled.div`
position: absolute;
display:flex;
flex-direction: row;
flex-wrap : wrap;
top: 85vh;
height: 35vh;
width: 100%;
margin-left:3vw;
// border: 1px solid;
`;

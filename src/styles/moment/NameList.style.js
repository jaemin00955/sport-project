import styled from "styled-components";

// Moment List 부분 시작 // 
export const ListLayout = styled.div`
  background:#ffffff;
  position: absolute;
  width: 25%;
  height: 50%;
  left: 0vw;
  top:13vh;
  display:flex;
  flex-direction: column;
`;
export const ListContainer = styled.div`
  background:#ffffff;
  border : 1px solid;
  width: 100%;
  height: 12vh;
  position:relative;  
`;
export const ListAvatar = styled.div`
  position:absolute;  
  left: 2vw;
  top:2vh;
  border:4px solid;
  border-radius:50%;
  width:4vw;
  height:4vw;
`
export const ListName = styled.div`
  position:absolute;  
  left: 7vw;
  top:3vh;
  height:1vw;
  font-size:1.5rem;
`
export const ListCheckIcon = styled.img`
  object-fit: cover;
  position: absolute;
  width: 1vw;
  height: 2vh;
  margin-left:0.5vw;
  margin-top:0.5vh;
`;
export const ListTeam = styled.div`
  position: absolute;
  width: 1vw;
  height: 2vh;
  left:7.5vw;
  top:5.5vh;
`;
// Moment List 부분 끝 // 

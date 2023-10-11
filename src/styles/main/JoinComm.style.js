import { Button } from "@aws-amplify/ui-react";
import styled from "styled-components";

export const JoinLayout = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  position: absolute;
  width: 23vw;
  height: 50vh;
  left: 2vw;
  top: 45vh;
`;

export const JoinText = styled.div`
  color: #364045;
  font-family: "Poppins", Helvetica;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 100%;
  padding: 1vw;
  `;

export const Line = styled.hr`
  height: 2px;
  left: 18px;
  position: absolute;
  top: 55px;
  width: 18vw;
`;
export const TeamContainer = styled.div`
  position : absolute;
  display: flex;
  flex-direction: column;
  width : 100%;
  height: 70%;
  top: 7vh;
`;
export const TeamMember = styled.div`
  position: relative;
  width: 20vw;
  height: 5vh;
  margin-top : 2vh;
  margin-left: 2vw;
  `;
export const Avatar = styled.div`
  background-image: url(${props=>props.$url});
  background-color: #bbccdc;
  background-size:cover;
  border-radius: 100%;
  position: absolute;
  width: 3vw;
  height: 5vh;
`;

export const TeamName = styled.div`
  color: #48555b;
  font-family: "Poppins", Helvetica;
  font-size: 1.2vw;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  left : 4vw;
  width:50%;
  `;
export const LeagueName = styled.div`
  color: #5e6f78;
  font-family: "Poppins", Helvetica;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  left : 4vw;
  top : 3vh;
`;
export const FollowBtn = styled(Button)`
  position: absolute;
  width: 2vw;
  height: 3vh;
  left : 14vw;
  top : 0.5vh;
  &:hover{  
    background-color : skyblue;
    color : blue
  }
  &:active {
    opacity: 0.3;
  }
`;

export const SeeAllText = styled.div`
  color: #70848e;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 10vw;
  left : 8vw;
  top : 45vh;
`;

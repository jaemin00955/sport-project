import styled from "styled-components";
import slide1 from "../../assets/slide-1.png"
import { Icon,Button } from "@aws-amplify/ui-react";

export const SliderContainer = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  width: 66vw;
  height: 28vh;
  left:28vw;
  top:50vh;
`;
export const CardWraper = styled.div`
  margin-top:2vw;
`;
export const Card = styled.div`
  height: 18vh;
  width: 18vw;
  padding: 2vw;
  background-image: url(${props=>props.$url});
  background-size: cover;
  margin:auto;
`;
export const ButtonDiv = styled.div`
  height: 30px;
  position: absolute;
  width:100%;
  top:23vh;
  // margin-top:1vh;
  text-align:center;
`
export const PrevBtn = styled(Button)`
  width: 3vw;
  height: 4vh;
`
export const NextBtn = styled(Button)`
width: 3vw;
height: 4vh;
`


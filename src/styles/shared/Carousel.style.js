import styled from "styled-components";
import rec1 from "../../assets/rec1.png"
// top: ${(props) => props.top};
// left: ${(props) => props.left};
// height: ${(props) => props.height};
// width: ${(props) => props.width};
export const CarouselLayout = styled.div`
  top: 45vh;
  left: 27vw;
  height: 25vh;
  position: relative;
  & > p {
    color: #000000;
    font-family: "Unlock", Helvetica;
    font-size: 2rem;
    font-weight: 400;
    margin: 0 auto;
  }
`;
export const SliderContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  width: 66vw;
  height: 25vh;
  & >.slick-list{
    position: absolute;
  }
`;
export const CardWraper = styled.div`
  position: relative;
  height: 20vh;
  width: 5vw;
  margin-top:3vh;
`;
export const Card = styled.div`
  height: 19vh;
  width: 13vw;
  background-image: url(${rec1});
  background-size: contain;
`;
export const Line = styled.hr`
  height: 2px;
  border: 3;
  background: black;
  left: 1vw;
  position: absolute;
  top: 35vh;
  width: 65vw;
  color: rgba(115, 115, 5, 5.65);
`;

import styled from "styled-components";
import login from '../../assets/LoginImage.png';

export const LoginWraper = styled.div`
  background-color: #ffffff;
  height: 80%;
  width: 90%;
  position:absolute;
  top: 15vh;
  left: 5vw;
  display:flex;
  flex-direction: row;
  `;

export const LoginLeft = styled.div`
  height: 100%;
  width: 50%;
  border:1px solid;
`;
export const LoginText = styled.div`
  height: 20vh;
  width: 35vw;
  position:absolute;
  left:5vw;
  top:10vh;
  font-size:2rem;
  word-break:break-word;
`;
export const LoginForm = styled.div`
  height: 45vh;
  width: 30vw;
  position:absolute;
  left:8vw;
  top:25vh;
`;
export const IdText = styled.div`
  height: 10vh;
  width: 10vw;
  position:absolute;
  left:3vw;
  top:3vh;
`;
export const IdInput = styled.input`
height: 5vh;
width: 25vw;
position:absolute;
left:3vw;
top:6vh;
`;
export const PassText = styled.div`
height: 10vh;
width: 10vw;
position:absolute;
left:3vw;
top:17vh;
`;
export const PassInput = styled.input`
height: 5vh;
width: 25vw;
position:absolute;
left:3vw;
top:20vh;
`;
export const LoginBtn = styled.button`
height: 5vh;
width: 10vw;
position:absolute;
left:9vw;
top:30vh;
`;
export const Divider = styled.div`
display: flex;
flex-basis: 100%;
align-items: center;
color: rgba(0, 0, 0, 0.35);
font-size: 12px;
position:absolute;
left:2vw;
top:65vh;

width:45%;
&::before {
  content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 16px;
}
&::after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 16px;
}
`;

export const LoginSnsButton = styled.div`
  height: 5vh;
  width: 10vw;
  border:1px solid;
  position:absolute;
  left:17vw;
  top:70vh;
  // background-image: url(${login});
`;

// 로그인 오른쪽 부분 시작 // 
export const LoginRight = styled.div`
  // border:1px solid;
  position:relative;
  // object-fit: contain;  
  width:50%;
  // background-image: url(${login});
  // background-repeat: no-repeat;
`;
export const LoginImage = styled.div`
  border:1px solid;
  position:absolute;
  background-size: cover;  
  width:100%;
  height:100%;
  background-image: url(${login});
  
`;
// 로그인 오른쪽 부분 끝 // 

import styled from "styled-components"

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
// 팔로우 팀카드 부분 시작
export const TeamCard = styled.div`
height: 334px;
width: 304px;
border: 1px solid;
margin:1vw;
position: relative;
`
export const TeamImage = styled.div`
height: 70%;
width: 100%;
border: 1px solid;
position: absolute;
`
export const TeamTitle = styled.div`
position: absolute;
left:3vw;
top:22vh;
padding:1vw;
color: #000000;
font-family: "Poppins", Helvetica;
font-size: 2rem;
font-weight: 700;
width:80%;
heigth:50%;
word-wrap: break-word;
`
export const TeamLeague = styled.div`
position: absolute;
left:4vw;
top:26vh;
padding:1vw;
color: #000000;
font-family: "Poppins", Helvetica;
font-size: 1.5rem;
font-weight: 500;
width:5%;
heigth:50%;
`
// 팔로우 팀카드 부분 끝

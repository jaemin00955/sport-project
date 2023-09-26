import styled from "styled-components";

export const MyBannerWraper = styled.div`
  position: relative;
  background-color: #4a4a4a;
  height: 28vh;
  width: 100%;
  top:10vh;
`;
export const BannerText = styled.div`
  color: #ffffff;
  font-family: "Nunito Sans", Helvetica;
  font-size: 30px;
  font-weight: 700;
  position : absolute;
  left : 5vw;
  top : 5vh;
  letter-spacing: 0;
  line-height: normal;
  width: 50vw;
`;
export const ButtonWraper = styled.div`
  position : absolute;
  right: 5vw;
  top: 5vh;
  width: 20vw;
  height: 20vh;
`;
export const SettingImage= styled.img`
  object-fit: cover;
  position: absolute;
  left : 2vw;
  top : 1vh;
  width:5vw;
  height:7vh;
`
export const SettingText = styled.div`
  color: #ffffff;
  font-family: "Nunito Sans", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  left : 2vw;
  top : 10vh;
`;
export const CodeImage= styled.img`
  object-fit: cover;
  position: absolute;
  left : 12vw;
  top : 1vh;
  width:5vw;
  height:7vh;
`
export const CodeText = styled.div`
  color: #ffffff;
  font-family: "Nunito Sans", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  left : 10vw;
  top : 10vh;
`
export const LogoutText= styled.div`
  color: #ffffff;
  font-family: "Nunito Sans", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  left : 2vw;
  top : 22vh;
`

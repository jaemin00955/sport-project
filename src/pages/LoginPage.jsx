import React from "react";
import TopBar from "../components/shared/TopBar";
import {
  Divider,
  IdInput,
  IdText,
  LoginBtn,
  LoginForm,
  LoginImage,
  LoginLeft,
  LoginRight,
  LoginSnsButton,
  LoginText,
  LoginWraper,
  PassInput,
  PassText,
} from "../styles/login/Login.style";

export default function LoginPage() {
  return (
    <>
      <TopBar />
      <LoginWraper>
        <LoginLeft>
          <LoginText>
            Login <br />
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </LoginText>
          <LoginForm>
            <IdText>아이디</IdText>
            <IdInput></IdInput>
            <PassText>비밀번호</PassText>
            <PassInput></PassInput>
            <LoginBtn>확인</LoginBtn>
          </LoginForm>
          <Divider>ddddd</Divider>
          <LoginSnsButton>Google이미지들어가기</LoginSnsButton>
        </LoginLeft>
        <LoginRight>
          <LoginImage></LoginImage>
        </LoginRight>
      </LoginWraper>
    </>
  );
}

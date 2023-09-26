import React from "react";
import {
  BannerText,
  ButtonWraper,
  CodeImage,
  CodeText,
  LogoutText,
  MyBannerWraper,
  SettingImage,
  SettingText,
} from "../../styles/my/MyBanner.style";
import { useModal } from "../../hooks/useModal";

export default function MyBanner() {
  const { openModal } = useModal();

  return (
    <MyBannerWraper>
      <BannerText>
        계정명 : ---------- <br />
        <br />
        가입 이메일 주소 : -------------
      </BannerText>
      <ButtonWraper>
        <SettingImage
          alt="setting"
          src={process.env.PUBLIC_URL + "/img/noti.png"}
        />
        <SettingText>계정 설정</SettingText>

        <CodeImage
          alt="code"
          src={process.env.PUBLIC_URL + "/img/noti.png"}
          onClick={() => openModal()}
        ></CodeImage>
        <CodeText>미디어코드 입력</CodeText>
      </ButtonWraper>
      <LogoutText>로그아웃</LogoutText>
    </MyBannerWraper>
  );
}
